import { NumericProperties, ScaledVector, Vector } from "../../numeric"
import { Max } from "../../types"
import { Prime, Primes, Rational, Smoothness } from "../types"
import { computeRationalVectorSmoothness, isRationalVectorSmooth } from "../vector"

const isRationalScaledVectorSmooth = <S extends Primes, T extends NumericProperties & Rational = Rational>(
    candidateSmoothRationalScaledVector: ScaledVector<T>,
    smoothness: S & Smoothness,
): candidateSmoothRationalScaledVector is ScaledVector<T & { smooth: S }> =>
    isRationalVectorSmooth(candidateSmoothRationalScaledVector.vector as Vector, smoothness)

const computeRationalScaledVectorSmoothness = <T extends NumericProperties & Rational = Rational>({
    vector,
}: ScaledVector<T>): Smoothness & Max<Prime<T>> =>
    computeRationalVectorSmoothness(vector) as Smoothness & Max<Prime<T>>

export { isRationalScaledVectorSmooth, computeRationalScaledVectorSmoothness }
