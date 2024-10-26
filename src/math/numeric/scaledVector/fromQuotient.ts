import {computeIrrationalScaledVectorFromQuotient} from "../../irrational"
import {computeRationalScaledVectorFromRationalQuotient, isQuotientRational} from "../../rational"
import {Quotient} from "../quotient"
import {NumericProperties} from "../types"
import {ScaledVector} from "./types"

const computeScaledVectorFromQuotient = <T extends NumericProperties>(quotient: Quotient<T>): ScaledVector<T> =>
    isQuotientRational(quotient) ?
        computeRationalScaledVectorFromRationalQuotient(quotient) :
        computeIrrationalScaledVectorFromQuotient(quotient)

export {
    computeScaledVectorFromQuotient,
}
