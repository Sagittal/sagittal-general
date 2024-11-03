import { deepEquals } from "../../../code"
import { Quotient } from "../../numeric"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const areRationalQuotientsEqual = (rationalQuotientA: Quotient, rationalQuotientB: Quotient): boolean =>
    deepEquals(
        computeLowestTermsRationalQuotient(rationalQuotientA),
        computeLowestTermsRationalQuotient(rationalQuotientB),
    )

export { areRationalQuotientsEqual }
