import { Rational, ScaledVector } from "../../numeric"
import { Copfr } from "../types"
import { computeRationalVectorCopfr } from "../vector"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalScaledVectorCopfr = <T extends Rational>({ vector }: ScaledVector<T>): Copfr<T> =>
    computeRationalVectorCopfr(vector) as Copfr<T>

export { computeRationalScaledVectorCopfr }
