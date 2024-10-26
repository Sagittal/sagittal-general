import {Direction, isVectorSub, isVectorSuper, isVectorUnison, NumericProperties, ScaledVector} from "../../numeric"

const isRationalScaledVectorSuper = <T extends NumericProperties>(
    candidateSuperRationalScaledVector: ScaledVector<T & {rational: true}>,
): candidateSuperRationalScaledVector is (ScaledVector<T & {rational: true} & {direction: Direction.SUPER}>) =>
    isVectorSuper(candidateSuperRationalScaledVector.vector)

const isRationalScaledVectorSub = <T extends NumericProperties>(
    candidateSubRationalScaledVector: ScaledVector<T & {rational: true}>,
): candidateSubRationalScaledVector is ScaledVector<T & {rational: true, direction: Direction.SUB}> =>
    isVectorSub(candidateSubRationalScaledVector.vector)

// This is actually not that silly, because irrational scaled vectors can be unison via a scaler with a 0 numerator while their
// Vectors are not unison.
const isRationalScaledVectorUnison = <T extends NumericProperties>(
    candidateUnisonRationalScaledVector: ScaledVector<T & {rational: true}>,
): candidateUnisonRationalScaledVector is ScaledVector<T & {rational: true, direction: Direction.UNISON}> =>
    isVectorUnison(candidateUnisonRationalScaledVector.vector)

export {
    isRationalScaledVectorSuper,
    isRationalScaledVectorSub,
    isRationalScaledVectorUnison,
}
