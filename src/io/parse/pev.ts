import {Pev} from "../../math"
import {Io} from "../types"

const handleAbbreviatedAndPunctuatedPev = (preparsedPevIo: Io): Io => {
    let handledPevIo = preparsedPevIo
        .replace(/^[|\[],/, "[0,0,")
        .replace(/^[|\[]([^ 0]+,.*)/, "[0,$1")

    let len = handledPevIo.length - 1
    while (handledPevIo.length !== len) {
        len = handledPevIo.length
        handledPevIo = handledPevIo.replace(/,,/g, ",0,0,0,") //
    }

    return handledPevIo
}

const parsePev = (pevIo: Io): Pev => {
    let preparsedPevIo = pevIo

    const isCopiedFromJavascript = !preparsedPevIo.match(/[⟩>|]/)
    if (!isCopiedFromJavascript) {
        preparsedPevIo = handleAbbreviatedAndPunctuatedPev(preparsedPevIo)
    }

    preparsedPevIo = preparsedPevIo
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace(/\s*\[\s+/, "[")
        .replace(/\s+]\s*/, "]")
        .replace(/,\s*/g, ",")
        .replace(/\s+/g, ",")

    return JSON.parse(preparsedPevIo)
}

export {
    parsePev,
}
