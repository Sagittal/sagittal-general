import {isCloseTo, MAX_JS_PRECISION, Precision} from "../../../code"
import {areRationalQuotientsEqual, isQuotientRational} from "../../rational"
import {computeDecimalFromQuotient} from "../decimal"
import {Quotient} from "./types"

const areQuotientsEqual = (
    quotientA: Quotient,
    quotientB: Quotient,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    isQuotientRational(quotientA) && isQuotientRational(quotientB) ?
        areRationalQuotientsEqual(quotientA, quotientB) :
        isCloseTo(
            quotientA && computeDecimalFromQuotient(quotientA),
            quotientB && computeDecimalFromQuotient(quotientB),
            precision,
        )

export {
    areQuotientsEqual,
}
