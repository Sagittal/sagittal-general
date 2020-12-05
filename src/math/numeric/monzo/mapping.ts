import {formatMonzo, formatVal} from "../../../io"
import {Step} from "../../../types"
import {Prime} from "../../rational"
import {Exponent} from "../../types"
import {NumericProperties} from "../types"
import {Monzo, Val} from "./types"

const computeMonzoMapping = <T extends NumericProperties>(monzo: Monzo, val: Val<T>): Step<T> => {
    if (val.length < monzo.length) {
        throw new Error(`Please provide a val with a prime limit at least as high as the monzo it is mapping. This val ${formatVal(val)} could not map monzo ${formatMonzo(monzo)}.`)
    }

    return monzo.reduce(
        (step: Step<T>, primeExponent: Exponent<Prime>, index: number): Step<T> => {
            return step + primeExponent * val[index] as Step<T>
        },
        0 as Step<T>,
    )
}

export {
    computeMonzoMapping,
}
