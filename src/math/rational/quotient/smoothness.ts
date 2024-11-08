import { Quotient, Rational } from "../../numeric"
import { max } from "../../typedOperations"
import { computeIntegerDecimalSmoothness, isIntegerDecimalSmooth } from "../decimal"
import { Primes, Smooth, Smoothness } from "../types"

const isRationalQuotientSmooth = <S extends Primes, T extends Rational>(
    rationalQuotient: Quotient<T>,
    smoothness: S & Smoothness,
): rationalQuotient is Quotient<T & Smooth<S>> => {
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
