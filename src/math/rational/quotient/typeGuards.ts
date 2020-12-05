import {dividesEvenly} from "../../dividesEvenly"
import {NumericProperties, Quotient} from "../../numeric"
import {isDecimalInteger} from "../decimal"

const isQuotientRational = <T extends NumericProperties>(
    candidateRationalQuotient: Quotient<T>,
): candidateRationalQuotient is Quotient<T & {rational: true}> => {
    const [numerator, denominator] = candidateRationalQuotient

    return isDecimalInteger(numerator) && isDecimalInteger(denominator)
}

const isQuotientInteger = <T extends NumericProperties>(
    candidateIntegerQuotient: Quotient<T>,
): candidateIntegerQuotient is Quotient<T & {integer: true}> => {
    const [numerator, denominator] = candidateIntegerQuotient

    return dividesEvenly(numerator, denominator)
}

export {
    isQuotientRational,
    isQuotientInteger,
}
