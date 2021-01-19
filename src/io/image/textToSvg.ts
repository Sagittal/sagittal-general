// @ts-ignore
import TextToSVG from "staff-code-text-to-svg"
import {Html} from "../../browser"
import {Multiplier} from "../../math"
import {Px, TextToSvgOptions} from "./types"

const textToSvg = (text: string, options: TextToSvgOptions = {}): Promise<Html> => {
    const {
        font = undefined,
        fontSize = 16 as Px,
        // TODO: TEXT-TO-SVG ISSUE, DEFAULTS
        //  This is the same default as in staff code web app. Should this even default here?
        line = 2 as Multiplier<Px>,
    } = options

    // TODO: TEXT-TO-SVG ISSUE, RETURN VALUE / INTERFACE
    //  You should not only have it return a string instead of SVG
    //  (so Node and browser can handle it each in their own way)
    //  But even further, you should just return the path, so they can deal with packaging it in the right kind of SVG?
    //  Although mightn't both edoStaves script group and staff-code web app want it just to return the fully formed SVG
    //  I.e. if it's capable of handling all the height stuff correctly?
    //  See to-do below about multiline SVGs
    //  Yeah, I'm now thinking that this should go back to returning the whole SVG... just in string form of course.
    //  Well... but we were struggling with getting text-to-svg to actually set the height of the actual top-level SVG
    //  In the SVG string it returns. So that may need to be done once in each consumption, i.e.
    //  The staff code version can just do it easily after hydrating the svg string into an svg element, fine.
    //  The edo staves Node version will have to, if it can't use the same DOMParser thingy to hydrate the SVG
    //  It will have to find some other way to sed or whatever manually into the string and find the right place to add
    //  The height property. Maybe they could at least share, from here, a helper method that will tell you what height
    //  To set it? Or maybe if you have to do it in Node at all, it means you should just handle it here always?
    //  Well, unfortunately I already set staff-code up to consume this text-to-svg version, so I'll have to implement
    //  The easy way there for now, but you can rip it out later I suppose when we ultimately have to do this (if we do)

    // TODO: TEXT-TO-SVG ISSUE, MULTILINE SVGS
    //  Promise.all for each line, and then for each one use `style: "transform: translate(0px, ???px);"` somehow
    //  That's (x, y), and although you specify px here, it seems to be same units as the unitless stuff in the path.
    //  Const lines = text.split(NEWLINE)
    //  The y calculation below will need to be modified at that time

    // TODO: TEXT-TO-SVG ISSUE, ISOMORPHIC CLEANLINESS
    //  It's not great that this is a @sagittal/general text-to-svg thing for Node which is causing this problem
    //  ; it should be the one to take care of it, not me
    //  Unless, now that I'm actually using the correct async interface, maybe we don't load that code?
    //  I.e. maybe we can delete all this
    //  I.e. the path-browserify stuff in the staff-code repo

    // TODO: TEXT-TO-SVG ISSUE, BOTH EDO STAVES AND STAFF CODE WORKS
    //  Ensure that both edo staves script group and the staff code web app can both use this method well

    return new Promise((resolve: (value: Html) => void): void => {
        TextToSVG.load(font, (err: Error, textToSVG: TextToSVG): void => {
            resolve(textToSVG.getSVG(text, {
                y: ((line - 1) / 2) * fontSize,
                fontSize,
                anchor: "left top" as "left top",
                features: {liga: true},
            }))
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
