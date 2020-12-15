// @ts-ignore
import {default as vectorizeText} from "vectorize-text"

const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256

const vectorizeBravuraTextSvg = (text: string, svg: SVGElement, options: {height?: number} = {}): void => {
    const polygons = vectorizeText(text, {
        polygons: true,
        // TODO: FEATURE IMPROVE, READY TO GO: SVG WIDTH
        //  Do whatever it takes to make the SVGs width match its contents
        textBaseline: "top",
        font: "Bravura Text BB",
        size: MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER,
        ...options
    })

    const path = [""]
    polygons.forEach((loops: string[][][]): void => {
        path.push(`<path d="`)
        loops.forEach((loop: string[][]): void => {
            const start = loop[0]
            path.push("M " + start[0] + " " + start[1])
            for (let i = 1; i < loop.length; ++i) {
                const p = loop[i]
                path.push("L " + p[0] + " " + p[1])
            }
            path.push("L " + start[0] + " " + start[1])
        })
        path.push(`" fill-rule="even-odd" stroke-width="1" fill="black"></path>`)
    })

    svg.innerHTML = path.join("")
}

export {
    vectorizeBravuraTextSvg,
}
