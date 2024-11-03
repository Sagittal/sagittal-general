import { Decimal, Denominator, Numerator, NumericProperties, Quotient } from "../../numeric"
import { computeRoughIntegerDecimal, isIntegerDecimalRough } from "../decimal"
import { Integer, Primes, Rational, Roughness } from "../types"

const computeRoughRationalQuotient = <S extends Primes, T extends NumericProperties & Rational>(
    [numerator, denominator]: [Numerator & Decimal<Integer>, Denominator & Decimal<Integer>],
    roughness: S & Roughness,
): Quotient<T & { rough: S; direction: undefined }> =>
    [
        computeRoughIntegerDecimal(numerator as Decimal<Integer>, roughness),
        computeRoughIntegerDecimal(denominator as Decimal<Integer>, roughness),
    ] as Quotient<T & { rough: S; direction: undefined }>

const isRationalQuotientRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalQuotient: Quotient<T & Rational>,
    roughness: S & Roughness,
): candidateRoughRationalQuotient is Quotient<T & Rational & { rough: S }> => {
    const [numerator, denominator] = candidateRoughRationalQuotient

    return isIntegerDecimalRough(numerator, roughness) && isIntegerDecimalRough(denominator, roughness)
}

export { computeRoughRationalQuotient, isRationalQuotientRough }
