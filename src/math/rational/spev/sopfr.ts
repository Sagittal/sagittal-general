import {NumericProperties, Spev} from "../../numeric"
import {computeRationalPevSopfr} from "../pev"
import {Sopfr} from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalSpevSopfr = <T extends NumericProperties>({pev}: Spev<T & {rational: true}>): Sopfr<T> =>
    computeRationalPevSopfr(pev)

export {
    computeRationalSpevSopfr,
}
