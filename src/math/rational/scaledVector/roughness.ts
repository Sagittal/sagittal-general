import { NumericProperties, ScaledVector, Vector } from "../../numeric"
import { Primes, Rational, Roughness } from "../types"
import { isRationalVectorRough } from "../vector"

const isRationalScaledVectorRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalScaledVector: ScaledVector<T & Rational>,
    roughness: S & Roughness,
): candidateRoughRationalScaledVector is ScaledVector<T & Rational & { rough: S }> =>
    isRationalVectorRough(candidateRoughRationalScaledVector.vector as Vector, roughness)

export { isRationalScaledVectorRough }
