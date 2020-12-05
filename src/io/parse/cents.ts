import {Cents} from "../../music"
import {BLANK} from "../constants"
import {Io} from "../types"

const parseCents = (centsIo: Io): Cents => {
    const preparsedCentsText = centsIo.replace("c", BLANK).replace("¢", BLANK)

    return parseFloat(preparsedCentsText) as Cents
}

export {
    parseCents,
}
