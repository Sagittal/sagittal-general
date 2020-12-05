import {NumericProperties, Scamon} from "../../numeric"
import {computeRationalMonzoCopfr} from "../monzo"
import {Copfr} from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalScamonCopfr = <T extends NumericProperties>({monzo}: Scamon<T & {rational: true}>): Copfr<T> =>
    computeRationalMonzoCopfr(monzo)

export {
    computeRationalScamonCopfr,
}
