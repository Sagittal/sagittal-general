import { Rational, ScaledVector, Vector } from "../../numeric"
import { Primes, Rough, Roughness } from "../types"
import { isRationalVectorRough } from "../vector"

const isRationalScaledVectorRough = <S extends Primes, T extends Rational>(
    candidateRoughRationalScaledVector: ScaledVector<T>,
    roughness: S & Roughness,
): candidateRoughRationalScaledVector is ScaledVector<T & Rough<S>> =>
    isRationalVectorRough(candidateRoughRationalScaledVector.vector as Vector, roughness)

export { isRationalScaledVectorRough }
