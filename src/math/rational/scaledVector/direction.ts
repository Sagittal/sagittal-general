import {
    isVectorSub,
    isVectorSuper,
    isVectorUnison,
    Rational,
    ScaledVector,
    Sub,
    Super,
    Unison,
    Vector,
} from "../../numeric"

const isRationalScaledVectorSuper = <T extends Rational>(
    candidateSuperRationalScaledVector: ScaledVector<T>,
): candidateSuperRationalScaledVector is ScaledVector<T & Super> =>
    isVectorSuper(candidateSuperRationalScaledVector.vector as Vector)

const isRationalScaledVectorSub = <T extends Rational>(
    candidateSubRationalScaledVector: ScaledVector<T>,
): candidateSubRationalScaledVector is ScaledVector<T & Sub> =>
    isVectorSub(candidateSubRationalScaledVector.vector as Vector)

const isRationalScaledVectorUnison = <T extends Rational>(
    candidateUnisonRationalScaledVector: ScaledVector<T>,
): candidateUnisonRationalScaledVector is ScaledVector<T & Unison> =>
    isVectorUnison(candidateUnisonRationalScaledVector.vector as Vector)

export { isRationalScaledVectorSuper, isRationalScaledVectorSub, isRationalScaledVectorUnison }
