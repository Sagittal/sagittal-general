import {computeIrrationalScamonFromDecimal} from "../../irrational"
import {computeRationalScamonFromRationalDecimal, isDecimalRational} from "../../rational"
import {Decimal} from "../decimal"
import {NumericProperties} from "../types"
import {Scamon} from "./types"

const computeScamonFromDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Scamon<T> =>
    isDecimalRational(decimal) ?
        computeRationalScamonFromRationalDecimal(decimal) :
        computeIrrationalScamonFromDecimal(decimal)

export {
    computeScamonFromDecimal,
}
