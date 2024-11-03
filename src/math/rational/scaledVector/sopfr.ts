import { NumericProperties, ScaledVector } from "../../numeric"
import { Rational, Sopfr } from "../types"
import { computeRationalVectorSopfr } from "../vector"

// Sum Of Prime Factors with Repetition

const computeRationalScaledVectorSopfr = <T extends NumericProperties>({
    vector,
}: ScaledVector<T & Rational>): Sopfr<T> => computeRationalVectorSopfr(vector) as Sopfr<T>

export { computeRationalScaledVectorSopfr }
