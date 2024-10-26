import { NumericProperties, ScaledVector } from "../../numeric"
import { computeRationalVectorCopfr } from "../vector"
import { Copfr } from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalScaledVectorCopfr = <T extends NumericProperties>({
    vector,
}: ScaledVector<T & { rational: true }>): Copfr<T> => computeRationalVectorCopfr(vector)

export { computeRationalScaledVectorCopfr }
