import {Exponent, Val} from "../../math"
import {Io} from "../types"
import {parseMonzo} from "./monzo"

const parseVal = (valIo: Io): Val => {
    let fakeTmpMonzoIo = valIo
        .replace("⟨", "[")
        .replace("<", "[")
        .replace("|", "⟩")

    const isCopiedFromJavascript = !valIo.match(/[⟨<|]/)
    if (!isCopiedFromJavascript) {
        fakeTmpMonzoIo = fakeTmpMonzoIo.replace("]", "⟩")
    }

    return parseMonzo(fakeTmpMonzoIo) as Exponent[] as Val
}

export {
    parseVal,
}
