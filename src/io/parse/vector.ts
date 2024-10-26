import {Vector} from "../../math"
import {Io} from "../types"

const handleAbbreviatedAndPunctuatedVector = (preparsedVectorIo: Io): Io => {
    let handledVectorIo = preparsedVectorIo
        .replace(/^[|\[],/, "[0,0,")
        .replace(/^[|\[]([^ 0]+,.*)/, "[0,$1")

    let len = handledVectorIo.length - 1
    while (handledVectorIo.length !== len) {
        len = handledVectorIo.length
        handledVectorIo = handledVectorIo.replace(/,,/g, ",0,0,0,") //
    }

    return handledVectorIo
}

const parseVector = (vectorIo: Io): Vector => {
    let preparsedVectorIo = vectorIo

    const isCopiedFromJavascript = !preparsedVectorIo.match(/[⟩>|]/)
    if (!isCopiedFromJavascript) {
        preparsedVectorIo = handleAbbreviatedAndPunctuatedVector(preparsedVectorIo)
    }

    preparsedVectorIo = preparsedVectorIo
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace(/\s*\[\s+/, "[")
        .replace(/\s+]\s*/, "]")
        .replace(/,\s*/g, ",")
        .replace(/\s+/g, ",")

    return JSON.parse(preparsedVectorIo)
}

export {
    parseVector,
}
