import { Integer, NumericProperties, Quotient, Rational } from "../../numeric"
import { isDecimalInteger } from "../decimal"

const isQuotientRational = <T extends NumericProperties>(
    candidateRationalQuotient: Quotient<T>,
): candidateRationalQuotient is Quotient<T & Rational> => {
    const [numerator, denominator] = candidateRationalQuotient

    return isDecimalInteger(numerator) && isDecimalInteger(denominator)
}

const isQuotientInteger = <T extends NumericProperties>(
    candidateIntegerQuotient: Quotient<T>,
): candidateIntegerQuotient is Quotient<T & Integer> => {
    const [numerator, denominator] = candidateIntegerQuotient

    return isDecimalInteger(numerator / denominator)
}

export { isQuotientRational, isQuotientInteger }
