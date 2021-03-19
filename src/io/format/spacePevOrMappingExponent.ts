import {Exponent} from "../../math"
import {Io} from "../types"

const spacePevOrMappingExponent = (exponent: Exponent): Io => {
    let exponentText = exponent.toString()
    while (exponentText.length < 3) {
        exponentText = " " + exponentText
    }

    return exponentText as Io
}

export {
    spacePevOrMappingExponent,
}
