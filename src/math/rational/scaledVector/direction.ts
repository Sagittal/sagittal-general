import { Override } from "../../../code"
import { Degree } from "../../../types"
import {
    Direction,
    isVectorSub,
    isVectorSuper,
    isVectorUnison,
    NUMERATOR_INDEX,
    NumericProperties,
    Quotient,
    ScaledVector,
    Unsigned,
    Vector,
} from "../../numeric"
import { Rational } from "../types"

const isRationalScaledVectorSuper = <T extends NumericProperties>(
    candidateSuperRationalScaledVector: ScaledVector<Omit<T, "direction"> & Rational>,
): candidateSuperRationalScaledVector is ScaledVector<Override<T, "direction", Direction.SUPER> & Rational> =>
    isVectorSuper(candidateSuperRationalScaledVector.vector as Vector)

const isRationalScaledVectorSub = <T extends NumericProperties>(
    candidateSubRationalScaledVector: ScaledVector<Omit<T, "direction"> & Rational>,
): candidateSubRationalScaledVector is ScaledVector<Override<T, "direction", Direction.SUB> & Rational> =>
    isVectorSub(candidateSubRationalScaledVector.vector as Vector)

const isScaledVectorScalerZero = (
    scaledVectorScaler: Quotient | Degree,
): scaledVectorScaler is (Quotient | Degree) & Unsigned => {
    if (typeof scaledVectorScaler === "number") return scaledVectorScaler === 0
    return scaledVectorScaler[NUMERATOR_INDEX] === 0
}

const isRationalScaledVectorUnison = <T extends NumericProperties>(
    candidateUnisonRationalScaledVector: ScaledVector<Omit<T, "direction"> & Rational>,
): candidateUnisonRationalScaledVector is ScaledVector<
    Override<T, "direction", Direction.UNISON> & Rational
> =>
    isVectorUnison(candidateUnisonRationalScaledVector.vector as Vector) ||
    isScaledVectorScalerZero(candidateUnisonRationalScaledVector.scaler)

export { isRationalScaledVectorSuper, isRationalScaledVectorSub, isRationalScaledVectorUnison }
