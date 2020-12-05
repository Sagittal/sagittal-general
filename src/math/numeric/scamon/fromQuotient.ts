import {computeIrrationalScamonFromQuotient} from "../../irrational"
import {computeRationalScamonFromRationalQuotient, isQuotientRational} from "../../rational"
import {Quotient} from "../quotient"
import {NumericProperties} from "../types"
import {Scamon} from "./types"

const computeScamonFromQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Scamon<T> =>
    isQuotientRational(quotient) ?
        computeRationalScamonFromRationalQuotient(quotient) :
        computeIrrationalScamonFromQuotient(quotient)

export {
    computeScamonFromQuotient,
}
