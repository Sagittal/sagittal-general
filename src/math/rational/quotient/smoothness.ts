import { NumericProperties, Quotient } from "../../numeric"
import { max } from "../../typedOperations"
import { computeIntegerDecimalSmoothness, isIntegerDecimalSmooth } from "../decimal"
import { Primes, Rational, Smoothness } from "../types"

const isRationalQuotientSmooth = <S extends Primes, T extends NumericProperties>(
    rationalQuotient: Quotient<T & Rational>,
    smoothness: S & Smoothness,
): rationalQuotient is Quotient<T & Rational & { smooth: S }> => {
    const [numerator, denominator] = rationalQuotient

    return isIntegerDecimalSmooth(numerator, smoothness) && isIntegerDecimalSmooth(denominator, smoothness)
}

const computeRationalQuotientSmoothness = (rationalQuotient: Quotient): Smoothness => {
    const [numerator, denominator] = rationalQuotient

    return max(
        computeIntegerDecimalSmoothness(numerator),
        computeIntegerDecimalSmoothness(denominator),
    ) as Smoothness
}

export { isRationalQuotientSmooth, computeRationalQuotientSmoothness }
