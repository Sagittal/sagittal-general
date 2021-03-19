import {computeIrrationalSpevFromDecimal} from "../../irrational"
import {computeRationalSpevFromRationalDecimal, isDecimalRational} from "../../rational"
import {Decimal} from "../decimal"
import {NumericProperties} from "../types"
import {Spev} from "./types"

const computeSpevFromDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Spev<T> =>
    isDecimalRational(decimal) ?
        computeRationalSpevFromRationalDecimal(decimal) :
        computeIrrationalSpevFromDecimal(decimal)

export {
    computeSpevFromDecimal,
}
