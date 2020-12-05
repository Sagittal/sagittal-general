import {NumericProperties, Quotient} from "../../numeric"
import {computeRoughIntegerDecimal, isIntegerDecimalRough} from "../decimal"
import {Primes, Roughness} from "../types"

const computeRoughRationalQuotient = <S extends Primes, T extends NumericProperties>(
    [numerator, denominator]: Quotient<T & {rational: true}>,
    roughness: S & Roughness,
): Quotient<T & {rational: true, rough: S, direction: undefined}> =>
// @ts-ignore
    ([computeRoughIntegerDecimal(numerator, roughness), computeRoughIntegerDecimal(denominator, roughness)])

const isRationalQuotientRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalQuotient: Quotient<T & {rational: true}>,
    roughness: S & Roughness,
): candidateRoughRationalQuotient is Quotient<T & {rational: true, rough: S}> => {
    const [numerator, denominator] = candidateRoughRationalQuotient

    return isIntegerDecimalRough(numerator, roughness) && isIntegerDecimalRough(denominator, roughness)
}

export {
    computeRoughRationalQuotient,
    isRationalQuotientRough,
}
