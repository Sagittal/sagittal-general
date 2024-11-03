import { NumericProperties, ScaledVector } from "../../numeric"
import { Copfr, Rational } from "../types"
import { computeRationalVectorCopfr } from "../vector"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalScaledVectorCopfr = <T extends NumericProperties>({
    vector,
}: ScaledVector<T & Rational>): Copfr<T> => computeRationalVectorCopfr(vector) as Copfr<T>

export { computeRationalScaledVectorCopfr }
