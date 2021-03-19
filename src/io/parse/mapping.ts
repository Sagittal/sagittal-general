import {Exponent, Mapping} from "../../math"
import {Io} from "../types"
import {parsePev} from "./pev"

const parseMapping = (mappingIo: Io): Mapping => {
    let fakeTmpPevIo = mappingIo
        .replace("⟨", "[")
        .replace("<", "[")
        .replace("|", "⟩")

    const isCopiedFromJavascript = !mappingIo.match(/[⟨<|]/)
    if (!isCopiedFromJavascript) {
        fakeTmpPevIo = fakeTmpPevIo.replace("]", "⟩")
    }

    return parsePev(fakeTmpPevIo) as Exponent[] as Mapping
}

export {
    parseMapping,
}
