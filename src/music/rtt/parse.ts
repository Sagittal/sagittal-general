import { Map } from "./types"
import { Io, parseVector } from "../../io"

const parseMap = (mapIo: Io): Map => {
    let fakeTmpVectorIo = mapIo.replace("⟨", "[").replace("<", "[").replace("|", "⟩")

    const isCopiedFromJavascript = !mapIo.match(/[⟨<|]/)
    if (!isCopiedFromJavascript) {
        fakeTmpVectorIo = fakeTmpVectorIo.replace("]", "⟩")
    }

    return parseVector(fakeTmpVectorIo) as unknown as Map
}

export { parseMap }
