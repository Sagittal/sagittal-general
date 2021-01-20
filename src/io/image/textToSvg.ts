import TextToSVG, {Anchor} from "staff-code-text-to-svg"
import {Html} from "../../browser"
import {Multiplier} from "../../math"
import {BLANK, NEWLINE} from "../constants"
import {formatPx} from "../format"
import {Px, TextToSvgOptions} from "./types"

const textToSvg = async (text: string, options: TextToSvgOptions = {}): Promise<Html> => {
    const {
        font = BLANK,
        fontSize = 16 as Px,
        line = 2 as Multiplier<Px>,
        padding = 0 as Px,
    } = options

    const textLines = text.split(NEWLINE)
    const lineCount = textLines.length
    const lineHeight = line * fontSize
    let maxWidth = 0

    const pathStrings = await Promise.all(
        textLines.map(async (textLine: string, index: number): Promise<Html> => {
            return new Promise((resolve: (value: Html) => void): void => {
                TextToSVG.load(font, (err: Error | null, textToSVG: TextToSVG | null): void => {
                    if (!textToSVG) {
                        throw err
                    }

                    const options = {
                        y: ((line - 1) / 2) * fontSize,
                        fontSize,
                        anchor: "left top" as Anchor,
                        features: {liga: true},
                    }

                    const svgString = textToSVG.getPath(textLine, options)
                    // TODO: https://github.com/shrhdk/text-to-svg/pull/57 not peformant; maybe just use bbox like b4?
                    const {width} = textToSVG.getMetrics(textLine, options)
                    if (width > maxWidth) maxWidth = width

                    const heightAdjustedAndTranslatedSvgString = svgString
                        .replace(/<path/, `\t<g transform="translate(0 ${index * lineHeight})">\n\t\t<path`)
                        .replace(/\/>/, `\/>\t<\/g>`) as Html
                    resolve(heightAdjustedAndTranslatedSvgString)
                })
            })
        }),
    )

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="${lineHeight * lineCount}" width="${maxWidth}" style="padding: ${formatPx(padding)}">\n${pathStrings.join(NEWLINE)}\n</svg>` as Html
}

// TODO: TEXT-TO-SVG ISSUE, PACKAGES & @TYPES
//  If you can't do all of the following:
//  1) Get your PR to text-to-svg accepted: https://github.com/shrhdk/text-to-svg/pull/63
//  2) Redo the font to use all type 4 ligature tables (may not be possible) -OR-
//     Get another PR done with text-to-svg to get them on the latest version of opentype.js which support type 7
//  Then you should figure out how to get the @types/text-to-svg to map onto your forked package
//  If *that*'s even possible...
//  And if you can't do both (1) and (2), then just keep using the forked and published packages you made
//  (I've just gone ahead and used a custom published npm package of both opentype.js and text-to-svg)
//  (The former of which is not a direct dependency; it's a dependency of my forked text-to-svg)
//  Some forum posts that may be helpful: https://forum.sagittal.org/viewtopic.php?p=3559#p3559
//  They show how it may well be the case that our Bravura Text BB lookup tables really are and have to be type 7
//  Not 4. But you may have to read a few posts ahead of that one linked above.

export {
    textToSvg,
}
