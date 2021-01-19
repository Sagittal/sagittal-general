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
    //  Maybe standardize between the two methods whether they return an SVG or SVG string
    //  But probably just clean up vectorize text when it's done
    //  Or rather, even, you should not only have it return a string instead of SVG
    //  (so Node and browser can handle it each in their own way)
    //  But even further, you should just return the path, so they can deal with packaging it in the right kind of SVG?
    //  Although mightn't both edoStaves script group and staff-code web app want it just to return the fully formed SVG
    //  I.e. if it's capable of handling all the height stuff correctly?
    //  See to-do below about multiline SVGs

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

// TODO: TEXT-TO-SVG ISSUE, @TYPES
//  If you can't do all of the following:
//  1) Get your PR to text-to-svg accepted
//  2) Redo the font to use all type 4 ligature tables (may not be possible) -OR-
//     Get another PR done with text-to-svg to get them on the latest version of opentype.js which support type 7
//  Then you should figure out how to get the @types/text-to-svg to map onto your forked package
//  If that's even possible...

// TODO: TEXT-TO-SVG ISSUE, NOTES RE: THE ALTERNATE VERSION OF TEXT-TO-SVG AND OPENTYPE.JS USED AND PATHS TO NORMALITY
//  This doesn't work yet. Waiting on Dave's investigations into what's up with the ligatures table
//  From the very bottom of this post: http://forum.sagittal.org/viewtopic.php?p=3146#p3146
//  Okay, now he's done that: http://forum.sagittal.org/viewtopic.php?p=3193#p3193
//  I do have some more stuff I could try. I was debugging opentype.js but it spits out all code points in decimal,
//  Not hexadecimal, so I can't figure out what the hell ranges and glyphs it's talking about.
//  I'll have to inject some helper methods into their code to do some heavier duty debugging.
//  - Okay, I'm getting back on track with the above
//  First of all, I need to make a PR to text-to-svg: in key: "getD" in build/src/index.js, they need to
//  Pass along to getPath a new option in the last argument (the options argument), which is itself an object;
//  `features: {liga: true}`
//  And if I just do that manually for now, I can get the accents to shift position, and continue debugging opentype.js
//  - So, next thing: I'm working in node_modules\opentype.js\dist\opentype.js, in Substitution.prototype.getLigatures
//  Just did a console.log(JSON.stringify(lookupTables)) and pulled out the JSON into ./lookupTables.json
//  It actually logged out 3 times, but each time was identical.
//  It's an array of 17 lookup tables. That does not correspond with the count of 'liga' lookup tables in Bravura Text.
//  Bravura Text has them ranging from 10 to 39, so that's 29 total of them. I will now try to identify if this is just
//  A subset of them, or something completely different for some reason.
//  Each of the JSON lookup tables is `lookupType: 4` and `lookupFlag: 0`
//  Lookup type 4 seems right, per https://docs.microsoft.com/en-us/typography/opentype/spec/gsub, it means ligature
//  Lookup flag less sure. maybe this? http://adobe-type-tools.github.io/afdko/OpenTypeFeatureFileSpecification.html#4.d
//  Every JSON lookup table also has just one element in its subtables array, which corresponds to what I find in
//  FontForge; each of those 29 tables in Bravura Text indeed has only a single subtable.
//  Okay, so of these 17, only the first one has a list of glyphs in its "coverage"; the other 16 call have ranges
//  But they all have the same ranges, which is a single range, from 2369 to 2384, which I thought might be Unicode,
//  But in hexadecimal that's U+0941 to U+0950, and doesn't appear to correspond to anything of interest...
//  Well, but then I tried searching the entire processed lookup table (I wrote a script to deep convert it to hexa)
//  And some of the glyphs which for sure should have been in there are just not
//  Okay, but what else could that be besides the CSP range?!? There must be some offset. That's 16 glyphs.
//  The CSPs are actually code points U+EB90 through U+EB9F, which starts at 60304 through 60319
//  So what's the offset? 57935. That number does not appear to have any significance...
//  Okay, well, let's just add that number
//  Because I did see, in the components array lengths of the ligature sets, some promising patterns in terms of their
//  Overall lengths... i.e. the counts of elements in those arrays seemed to match the zig-zaggy shapes
//  I see in FontForge when editing data on the lookup subtables...
//  BIG BREAK! I logged out in `getLookupTables: function(script, language, feature, lookupType, create)`
//  "exciting stuff" and it shows it iterating over lookup tables 10 through 39, and for 13 of them, the lookup type is
//  7 instead of 4, which apparently is the "Extension Substitution"... so that accounts for there being only 17 of them
//  (I imagine that one that comes first must be some completely different kind or something... who knows...)
//  Results below.
//  But that means that I should see something different in FontForge for these lookup tables. But I don't!!!
//  When you Edit Metadata for each lookup table, the top section is greyed out and says type: Ligature Substitution
//  For all of them! So why is opentype.js misidentifying about half of them as type 7??? It's greyed out in FontForge
//  So I cant' even like force re-select it to kick it or something. And I got excited for a minute and thought I could
//  Just change that condition so that whether it was type 4 or 7 the table still got pushed to the list of tables
//  And I'd just see what I wanted to see in the exported SVG, but I started getting mysterious JS errors about
//  TypeError: Cannot read property 'format' of undefined
//  Which is not super mysterious except that the stack trace is not accurate by line count so I can't quite figure out
//  How to get it to shut up, like, is it superficial or is there actually something deeply different about those tabls?
//  (This, btw, was where I got the info about how to change/read that lookup table type in FontForge:
//  See: https://fontforge.org/docs/ui/dialogs/lookups.html )
//  Also, this site was how I got inspired to just look through opentype.js's code for lookupListIndexes:
//  See: https://opentype.js.org/font-inspector.html
//  AH, okay, I see the problem. THe stack trace was taking me into their src/ code but I needed to stay in the dist/
//  Easy. Okay.
//  So let's look at some of those type 7 tables...
//  Okay, so the sructure is similar, but very slightly different, see "exampleType7Table.json"
//  So I just needed to add a munged table bit to opentype.js and it works, see that alos below
/*
exciting stuff 10 4 4
exciting stuff 11 7 4
exciting stuff 12 7 4
exciting stuff 13 7 4
exciting stuff 14 4 4
exciting stuff 15 7 4
exciting stuff 16 7 4
exciting stuff 17 7 4
exciting stuff 18 7 4
exciting stuff 19 7 4
exciting stuff 20 4 4
exciting stuff 21 4 4
exciting stuff 22 4 4
exciting stuff 23 4 4
exciting stuff 24 7 4
exciting stuff 25 4 4
exciting stuff 26 4 4
exciting stuff 27 4 4
exciting stuff 28 4 4
exciting stuff 29 4 4
exciting stuff 30 4 4
exciting stuff 31 4 4
exciting stuff 32 7 4
exciting stuff 33 7 4
exciting stuff 34 4 4
exciting stuff 35 7 4
exciting stuff 36 7 4
exciting stuff 37 4 4
exciting stuff 39 4 4
 */
/*
if (lookupTable.lookupType === lookupType) {
	                    tables.push(lookupTable);
	                } else if (lookupTable.lookupType === 7) {
		            	const mungedTable = {
		            		lookupType: 4,
				            lookupFlag: 0,
				            subtables: [
				            	lookupTable.subtables[0].extension
				            ]
			            }
		            	tables.push(mungedTable)
		            }
 */
// Okay, I have made the PR: https://github.com/shrhdk/text-to-svg/pull/63
// A mystery solved: if you use https://opentype.js.org/font-inspector.html and upload Bravura Text BB,
// then expand the "cmap", you can see e.g. that "60304":2369, which is another way of saying that the reason you see
// you see start and end of 2639 and 2384 in the subtables.coverage.ranges objects is that those are the INDICES of the
// CPSs in the font. 60304 in decimal is EB90 in hexadecimal, AKA the start of the CSP range. So that's why all the
// offsets were completely different and unpredictable: because there are gaps in the font where there are no glyphs,
// sometimes big gaps. Why they need to refer to all glyphs indirectly by their indices rather than directly by their
// code points, I do not yet know.
// -------
// Okay, and so now I've just gone ahead and used a custom published npm package of both opentype.js and text-to-svg
// And asked this script group to use the text-to-svg one, which in turn uses the opentype.js one, so now generating
// edo notations works, for the text-to-svg one of the two potential solution scripts I started in this repo
// (the other one, not this one here!)
// - WHat I should do is clean this up, and explain what to do, and link to posts and standardize around text-to-svg
// as opposed to vectorize-text, in @sagittal/general too

export {
    textToSvg,
}
