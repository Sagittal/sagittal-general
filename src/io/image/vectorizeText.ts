// @ts-ignore
import {default as vectorizeTextDefault} from "vectorize-text"
import {Html} from "../../browser"
import {max} from "../../math"
import {BLANK, SPACE} from "../constants"
import {computeLineCount} from "../lineCount"
import {VectorizeTextOptions} from "./types"

const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256
const OFFSET_Y = 1

// TODO: VECTORIZE-TEXT ISSUE, CANVAS TYPE
//  Update that Canvas type in vectorizeText to be either web Canvas or Node Canvas
const vectorizeText = (text: string, options: VectorizeTextOptions = {}): Html => {
    const {canvas: canvasArgument, lineSpacing = 1} = options

    const canvas = canvasArgument || document.createElement("canvas")
    const lineCount = computeLineCount(text)

    // TODO: VECTORIZE-TEXT ISSUE, HEIGHT CALCULATION
    //  This needs to be revisited in the wake of the changes I made to SVG height in staff-code
    //  Only adjusting this now because of weirdness picked up on in edoStaves script group

    // TODO: VECTORIZE-TEXT ISSUE, CUTTING OFF THE BOTTOM OF MULTI-LINE DISPLAYS

    // TODO: VECTORIZE-TEXT ISSUE, MANGLING ON REPEAT DOWNLOADS WITH CHANGES
    //  Going to have to deal with this crazy garbled nonsense you get seemingly
    //  If you ever try to download the SVG more than once without refreshing the page

    const maybeBetterHeight = (lineCount + OFFSET_Y)
        * (lineSpacing * MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER)
    canvas.height = max(maybeBetterHeight, canvas.height)

    const textReformattedForVectorizeTextToHandleNewlines = text.replace(/\n/g, "<br>")

    const polygons = vectorizeTextDefault(
        textReformattedForVectorizeTextToHandleNewlines,
        {
            ...options,
            canvas,
            polygons: true,
            textBaseline: "top",
            size: MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER,
            styletags: {breaklines: lineCount > 1},
        },
    )

    const paths = [""]
    polygons.forEach((loops: string[][][]): void => {
        paths.push(`<path d="`)
        loops.forEach((loop: string[][]): void => {
            const start = loop[0]
            paths.push("M " + start[0] + SPACE + start[1])
            for (let i = 1; i < loop.length; ++i) {
                const p = loop[i]
                paths.push("L " + p[0] + SPACE + p[1])
            }
            paths.push("L " + start[0] + SPACE + start[1])
        })
        paths.push(`" fill-rule="even-odd" stroke-width="1" fill="black"></path>`)
    })

    return paths.join(BLANK) as Html
}

export {
    vectorizeText,
}
