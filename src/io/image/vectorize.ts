// @ts-ignore
import TextToSVG from "staff-code-text-to-svg"
// @ts-ignore
import {default as vectorizeTextDefault} from "vectorize-text"
import {Html} from "../../browser"
import {max} from "../../math"
import {BLANK, SPACE} from "../constants"
import {computeLineCount} from "../lineCount"
import {TextToSvgOptions, VectorizeTextOptions} from "./types"

const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256
const OFFSET_Y = 1

const vectorizeText = (text: string, options: VectorizeTextOptions = {}): Html => {
    const {canvas: canvasArgument, lineSpacing = 1} = options

    const canvas = canvasArgument || document.createElement("canvas")
    const lineCount = computeLineCount(text)

    // TODO: this needs to be revisited in the wake of the changes I made to SVG height in staff-code
    //  Only adjusting this now because of weirdness picked up on in edoStaves script group
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

const textToSvg = (text: string, options: TextToSvgOptions = {}): Promise<SVGGraphicsElement> => {
    const {
        font,
        x = 0,
        y = 50,
        fontSize = 72,
        anchor = "top" as "top",
        attributes = {fill: "black", stroke: "black"},
        features = {liga: true},
    } = options as any

    return new Promise((resolve: (value: SVGGraphicsElement) => void): void => {
        TextToSVG.load(font, (err: Error, textToSVG: TextToSVG): void => {
            const svgString = textToSVG.getSVG(text, {x, y, fontSize, anchor, attributes, features})
            const svgParser = new DOMParser()
            const svgDocument = svgParser.parseFromString(svgString, "text/html")
            const svg = svgDocument.firstChild as SVGGraphicsElement

            resolve(svg)
        })
    })
}

export {
    vectorizeText,
    textToSvg,
}
