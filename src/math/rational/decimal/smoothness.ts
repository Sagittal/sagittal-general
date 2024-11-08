import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Decimal, Integer, Rational } from "../../numeric"
import { SMOOTH_ROUGH_OFFSET } from "../constants"
import { computeRationalQuotientFromRationalDecimal, computeRationalQuotientSmoothness } from "../quotient"
import { Primes, Roughness, Smoothness } from "../types"
import { computeRationalVectorFromRationalDecimal, computeRationalVectorSmoothness } from "../vector"
import { computeRoughIntegerDecimal } from "./roughness"

const isIntegerDecimalSmooth = (integerDecimal: Decimal<Integer>, smoothness: Smoothness): boolean =>
    computeRoughIntegerDecimal(integerDecimal, (smoothness + SMOOTH_ROUGH_OFFSET) as Primes & Roughness) ===
    MULTIPLICATIVE_IDENTITY

const computeIntegerDecimalSmoothness = (integerDecimal: Decimal<Integer>): Smoothness => {
    const integerVector = computeRationalVectorFromRationalDecimal(integerDecimal)

    return computeRationalVectorSmoothness(integerVector)
}

const computeRationalDecimalSmoothness = (rationalDecimal: Decimal<Rational>): Smoothness => {
    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalQuotientSmoothness(rationalQuotient)
}

export { isIntegerDecimalSmooth, computeIntegerDecimalSmoothness, computeRationalDecimalSmoothness }
