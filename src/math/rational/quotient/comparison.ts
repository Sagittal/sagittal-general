import {deepEquals} from "../../../code"
import {Quotient} from "../../numeric"
import {computeLowestTermsRationalQuotient} from "./lowestTerms"

const areRationalQuotientsEqual = (
    rationalQuotientA: Quotient<{rational: true}>,
    rationalQuotientB: Quotient<{rational: true}>,
): boolean =>
    deepEquals(
        computeLowestTermsRationalQuotient(rationalQuotientA),
        computeLowestTermsRationalQuotient(rationalQuotientB),
    )

export {
    areRationalQuotientsEqual,
}
