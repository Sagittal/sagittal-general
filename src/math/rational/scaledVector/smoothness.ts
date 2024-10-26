import { NumericProperties, ScaledVector } from "../../numeric"
import { Max } from "../../types"
import { computeRationalVectorSmoothness, isRationalVectorSmooth } from "../vector"
import { Prime, Primes, Smoothness } from "../types"

const isRationalScaledVectorSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalScaledVector: ScaledVector<T & { rational: true }>,
    smoothness: S & Smoothness,
): candidateSmoothRationalScaledVector is ScaledVector<T & { rational: true; smooth: S }> =>
    isRationalVectorSmooth(candidateSmoothRationalScaledVector.vector, smoothness)

const computeRationalScaledVectorSmoothness = <T extends NumericProperties>({
    vector,
}: ScaledVector<T & { rational: true }>): Smoothness & Max<Prime<T>> =>
    computeRationalVectorSmoothness(vector) as Smoothness & Max<Prime<T>>

export { isRationalScaledVectorSmooth, computeRationalScaledVectorSmoothness }
