import {MAX_JS_INTEGER_VALUE} from "../../../code"
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

    let numerator = computeDecimalFromMonzo(numeratorMonzo)
    if (numerator > MAX_JS_INTEGER_VALUE) numerator = Infinity
    let denominator = computeDecimalFromMonzo(denominatorMonzo)
    if (denominator > MAX_JS_INTEGER_VALUE) denominator = Infinity

    return [numerator, denominator] as Quotient<T>
}

export {
    computeQuotientFromMonzo,
}
