import {computeIrrationalSpevFromPev} from "../../irrational"
import {computeRationalSpevFromRationalPev, isPevRational} from "../../rational"
import {Pev} from "../pev"
import {NumericProperties} from "../types"
import {Spev} from "./types"

const computeSpevFromPev = <T extends NumericProperties>(pev: Pev<T>): Spev<T> =>
    isPevRational(pev) ?
        computeRationalSpevFromRationalPev(pev) :
        computeIrrationalSpevFromPev(pev)

export {
    computeSpevFromPev,
}
