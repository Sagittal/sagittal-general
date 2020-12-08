import {Prime} from "../../rational"
import {negative} from "../../typedOperations"
import {Exponent} from "../../types"
import {computeDecimalFromMonzo} from "../decimal"
import {Monzo} from "../monzo"
import {NumericProperties} from "../types"
import {Quotient} from "./types"

const computeQuotientFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Quotient<T> => {
    const numeratorMonzo = monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent > 0 ? primeExponent : 0 as Exponent<Prime>
    })
    const denominatorMonzo = monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent < 0 ? negative(primeExponent) : 0 as Exponent<Prime>
    })

    const numerator = computeDecimalFromMonzo(numeratorMonzo)
    const denominator = computeDecimalFromMonzo(denominatorMonzo)

    return [numerator, denominator] as Quotient<T>
}

export {
    computeQuotientFromMonzo,
}
