// @ts-ignore
import {default as vectorizeTextDefault} from "vectorize-text"
import {FontName, Html} from "../../browser"
import {BLANK, SPACE} from "../constants"
import {Px} from "./types"

const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256

const vectorizeText = (
    text: string,
    options: {height?: Px, font?: FontName, canvas?: HTMLCanvasElement, context?: CanvasRenderingContext2D} = {},
): Html => {
    const polygons = vectorizeTextDefault(text, {
        polygons: true,
        textBaseline: "top",
        size: MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER,
        ...options,
    })

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
