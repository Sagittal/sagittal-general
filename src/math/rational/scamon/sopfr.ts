import {NumericProperties, Scamon} from "../../numeric"
import {computeRationalMonzoSopfr} from "../monzo"
import {Sopfr} from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalScamonSopfr = <T extends NumericProperties>({monzo}: Scamon<T & {rational: true}>): Sopfr<T> =>
    computeRationalMonzoSopfr(monzo)

export {
    computeRationalScamonSopfr,
}
