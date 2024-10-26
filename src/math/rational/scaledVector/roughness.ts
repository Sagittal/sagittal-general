import { NumericProperties, ScaledVector } from "../../numeric"
import { isRationalVectorRough } from "../vector"
import { Primes, Roughness } from "../types"

const isRationalScaledVectorRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalScaledVector: ScaledVector<T & { rational: true }>,
    roughness: S & Roughness,
): candidateRoughRationalScaledVector is ScaledVector<T & { rational: true; rough: S }> =>
    isRationalVectorRough(candidateRoughRationalScaledVector.vector, roughness)

export { isRationalScaledVectorRough }
