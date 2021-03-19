import {NumericProperties, Spev} from "../../numeric"
import {computeRationalPevCopfr} from "../pev"
import {Copfr} from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalSpevCopfr = <T extends NumericProperties>({pev}: Spev<T & {rational: true}>): Copfr<T> =>
    computeRationalPevCopfr(pev)

export {
    computeRationalSpevCopfr,
}
