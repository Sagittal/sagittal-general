import {MULTIPLICATIVE_IDENTITY} from "../../constants"
import {Decimal} from "../../numeric"
import {SMOOTH_ROUGH_OFFSET} from "../constants"
import {computeRationalMonzoFromRationalDecimal, computeRationalMonzoSmoothness} from "../monzo"
import {computeRationalQuotientFromRationalDecimal, computeRationalQuotientSmoothness} from "../quotient"
import {Primes, Roughness, Smoothness} from "../types"
import {computeRoughIntegerDecimal} from "./roughness"

const isIntegerDecimalSmooth = (integerDecimal: Decimal<{integer: true}>, smoothness: Smoothness): boolean =>
    computeRoughIntegerDecimal(
        integerDecimal,
        smoothness + SMOOTH_ROUGH_OFFSET as Primes & Roughness,
    ) === MULTIPLICATIVE_IDENTITY

const computeIntegerDecimalSmoothness = (integerDecimal: Decimal<{integer: true}>): Smoothness => {
    const integerMonzo = computeRationalMonzoFromRationalDecimal(integerDecimal)

    return computeRationalMonzoSmoothness(integerMonzo)
}

const computeRationalDecimalSmoothness = (rationalDecimal: Decimal<{rational: true}>): Smoothness => {
    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalQuotientSmoothness(rationalQuotient)
}

export {
    isIntegerDecimalSmooth,
    computeIntegerDecimalSmoothness,
    computeRationalDecimalSmoothness,
}
