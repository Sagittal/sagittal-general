import {computeIrrationalScaledVectorFromDecimal} from "../../irrational"
import {computeRationalScaledVectorFromRationalDecimal, isDecimalRational} from "../../rational"
import {Decimal} from "../decimal"
import {NumericProperties} from "../types"
import {ScaledVector} from "./types"

const computeScaledVectorFromDecimal = <T extends NumericProperties>(decimal: Decimal<T>): ScaledVector<T> =>
    isDecimalRational(decimal) ?
        computeRationalScaledVectorFromRationalDecimal(decimal) :
        computeIrrationalScaledVectorFromDecimal(decimal)

export {
    computeScaledVectorFromDecimal,
}
