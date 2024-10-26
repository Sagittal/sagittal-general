import { NumericProperties, ScaledVector } from "../../numeric"
import { computeRationalVectorSopfr } from "../vector"
import { Sopfr } from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalScaledVectorSopfr = <T extends NumericProperties>({
    vector,
}: ScaledVector<T & { rational: true }>): Sopfr<T> => computeRationalVectorSopfr(vector)

export { computeRationalScaledVectorSopfr }
