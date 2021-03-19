import {Prime} from "../../rational"
import {negative} from "../../typedOperations"
import {Exponent} from "../../types"
import {computeDecimalFromPev} from "../decimal"
import {Pev} from "../pev"
import {NumericProperties} from "../types"
import {Quotient} from "./types"

const computeQuotientFromPev = <T extends NumericProperties>(pev: Pev<T>): Quotient<T> => {
    const numeratorPev = pev.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent > 0 ? primeExponent : 0 as Exponent<Prime>
    })
    const denominatorPev = pev.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent < 0 ? negative(primeExponent) : 0 as Exponent<Prime>
    })

    const numerator = computeDecimalFromPev(numeratorPev)
    const denominator = computeDecimalFromPev(denominatorPev)

    return [numerator, denominator] as Quotient<T>
}

export {
    computeQuotientFromPev,
}
