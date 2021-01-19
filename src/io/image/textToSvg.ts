// @ts-ignore
import TextToSVG from "staff-code-text-to-svg"
import {Html} from "../../browser"
import {Multiplier} from "../../math"
import {formatPx} from "../format"
import {Px, TextToSvgOptions} from "./types"

const textToSvg = (text: string, options: TextToSvgOptions = {}): Promise<Html> => {
    const {
        font = undefined,
        fontSize = 16 as Px,
        line = 2 as Multiplier<Px>,
        padding = 0 as Px,
    } = options

    // TODO: TEXT-TO-SVG ISSUE, MULTILINE SVGS
    //  Promise.all for each line, and then for each one use `style: "transform: translate(0px, ???px);"` somehow
    //  That's (x, y), and although you specify px here, it seems to be same units as the unitless stuff in the path.
    //  Const lines = text.split(NEWLINE)
    //  The y calculation below will need to be modified at that time
    //  - Then just double check that both edo staves script group & staff code web app can both use this method well

    return new Promise((resolve: (value: Html) => void): void => {
        TextToSVG.load(font, (err: Error, textToSVG: TextToSVG): void => {
            const svgString = textToSVG.getSVG(text, {
                y: ((line - 1) / 2) * fontSize,
                fontSize,
                anchor: "left top" as "left top",
                features: {liga: true},
            })

            const height = line * fontSize
            const heightAndMarginAdjustedSvg = svgString.replace(/height="(\d+)"/, `height="${height}" style="padding: ${formatPx(padding)}"`)

            resolve(heightAndMarginAdjustedSvg)
        })
    })
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
