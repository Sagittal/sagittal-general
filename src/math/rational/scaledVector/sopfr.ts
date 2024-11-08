import { Rational, ScaledVector } from "../../numeric"
import { Sopfr } from "../types"
import { computeRationalVectorSopfr } from "../vector"

// Sum Of Prime Factors with Repetition

const computeRationalScaledVectorSopfr = <T extends Rational>({ vector }: ScaledVector<T>): Sopfr<T> =>
    computeRationalVectorSopfr(vector) as Sopfr<T>

export { computeRationalScaledVectorSopfr }
