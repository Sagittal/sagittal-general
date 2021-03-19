import {formatMapping, formatPev} from "../../../io"
import {Step} from "../../../types"
import {Prime} from "../../rational"
import {Exponent} from "../../types"
import {NumericProperties} from "../types"
import {Mapping, Pev} from "./types"

const computePevMapping = <T extends NumericProperties>(pev: Pev, mapping: Mapping<T>): Step<T> => {
    if (mapping.length < pev.length) {
        throw new Error(`Please provide a mapping with a prime limit at least as high as the pev it is mapping. This mapping ${formatMapping(mapping)} could not map pev ${formatPev(pev)}.`)
    }

    return pev.reduce(
        (step: Step<T>, primeExponent: Exponent<Prime>, index: number): Step<T> => {
            return step + primeExponent * mapping[index] as Step<T>
        },
        0 as Step<T>,
    )
}

export {
    computePevMapping,
}
