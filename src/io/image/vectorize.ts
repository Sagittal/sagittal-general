// @ts-ignore
import {default as vectorizeTextDefault} from "vectorize-text"
import {FontName, Html} from "../../browser"
import {BLANK, SPACE} from "../constants"
import {Px} from "./types"

const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256

const vectorizeText = (text: string, options: {height?: Px, font?: FontName} = {}): Html => {
    const polygons = vectorizeTextDefault(text, {
        polygons: true,
        textBaseline: "top",
        size: MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER,
        ...options,
    })

    const path = [""]
    polygons.forEach((loops: string[][][]): void => {
        path.push(`<path d="`)
        loops.forEach((loop: string[][]): void => {
            const start = loop[0]
            path.push("M " + start[0] + SPACE + start[1])
            for (let i = 1; i < loop.length; ++i) {
                const p = loop[i]
                path.push("L " + p[0] + SPACE + p[1])
            }
            path.push("L " + start[0] + SPACE + start[1])
        })
        path.push(`" fill-rule="even-odd" stroke-width="1" fill="black"></path>`)
    })

    return path.join(BLANK) as Html
}

export {
    vectorizeText,
}
