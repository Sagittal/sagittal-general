import {MAX_JS_INTEGER_VALUE} from "../../../code"
import {formatMonzo, formatQuotient, LogTarget, saveLog} from "../../../io"
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
    const quotient = [numerator, denominator] as Quotient<T>

    if (numerator > MAX_JS_INTEGER_VALUE || denominator > MAX_JS_INTEGER_VALUE) {
        saveLog(`Converted a monzo to a quotient where a fractional part exceeds JavaScript's maximum safe integer value. Accuracy has been compromised: ${formatMonzo(monzo)} -> ${formatQuotient(quotient)}`, LogTarget.ERROR)
    }

    return quotient
}

export {
    computeQuotientFromMonzo,
}
