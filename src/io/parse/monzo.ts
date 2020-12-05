import {Monzo} from "../../math"
import {Io} from "../types"

const handleAbbreviatedAndPunctuatedMonzo = (preparsedMonzoIo: Io): Io => {
    let handledMonzoIo = preparsedMonzoIo
        .replace(/^[|\[],/, "[0,0,")
        .replace(/^[|\[]([^ 0]+,.*)/, "[0,$1")

    let len = handledMonzoIo.length - 1
    while (handledMonzoIo.length !== len) {
        len = handledMonzoIo.length
        handledMonzoIo = handledMonzoIo.replace(/,,/g, ",0,0,0,") //
    }

    return handledMonzoIo
}

const parseMonzo = (monzoIo: Io): Monzo => {
    let preparsedMonzoIo = monzoIo

    const isCopiedFromJavascript = !preparsedMonzoIo.match(/[⟩>|]/)
    if (!isCopiedFromJavascript) {
        preparsedMonzoIo = handleAbbreviatedAndPunctuatedMonzo(preparsedMonzoIo)
    }

    preparsedMonzoIo = preparsedMonzoIo
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace(/\s*\[\s+/, "[")
        .replace(/\s+]\s*/, "]")
        .replace(/,\s*/g, ",")
        .replace(/\s+/g, ",")

    return JSON.parse(preparsedMonzoIo)
}

export {
    parseMonzo,
}
