import { Decimal, UnknownDirection, Quotient, Rational, Integer } from "../../numeric"
import { computeRoughIntegerDecimal, isIntegerDecimalRough } from "../decimal"
import { Primes, Rough, Roughness } from "../types"

const computeRoughRationalQuotient = <S extends Primes, T extends Rational = Rational>(
    [numerator, denominator]: Quotient<T>,
    roughness: S & Roughness,
): Quotient<T & Rough<S> & UnknownDirection> =>
    [
        computeRoughIntegerDecimal(numerator as Decimal<Integer>, roughness),
        computeRoughIntegerDecimal(denominator as Decimal<Integer>, roughness),
    ] as Quotient<T & Rough<S> & UnknownDirection>

const isRationalQuotientRough = <S extends Primes, T extends Rational>(
    candidateRoughRationalQuotient: Quotient<T>,
    roughness: S & Roughness,
): candidateRoughRationalQuotient is Quotient<T & Rough<S>> => {
    const [numerator, denominator] = candidateRoughRationalQuotient

    return isIntegerDecimalRough(numerator, roughness) && isIntegerDecimalRough(denominator, roughness)
}

export { computeRoughRationalQuotient, isRationalQuotientRough }
