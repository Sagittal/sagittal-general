import { Exponent, Map } from "../../math"
import { Io } from "../types"
import { parsePev } from "./pev"

const parseMap = (mapIo: Io): Map => {
    let fakeTmpPevIo = mapIo
        .replace("⟨", "[")
        .replace("<", "[")
        .replace("|", "⟩")

    const isCopiedFromJavascript = !mapIo.match(/[⟨<|]/)
    if (!isCopiedFromJavascript) {
        fakeTmpPevIo = fakeTmpPevIo.replace("]", "⟩")
    }

    return parsePev(fakeTmpPevIo) as Exponent[] as Map
}

export { parseMap }
