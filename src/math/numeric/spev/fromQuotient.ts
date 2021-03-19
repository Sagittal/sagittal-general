import {computeIrrationalSpevFromQuotient} from "../../irrational"
import {computeRationalSpevFromRationalQuotient, isQuotientRational} from "../../rational"
import {Quotient} from "../quotient"
import {NumericProperties} from "../types"
import {Spev} from "./types"

const computeSpevFromQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Spev<T> =>
    isQuotientRational(quotient) ?
        computeRationalSpevFromRationalQuotient(quotient) :
        computeIrrationalSpevFromQuotient(quotient)

export {
    computeSpevFromQuotient,
}
