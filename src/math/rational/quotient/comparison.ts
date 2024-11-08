import { deepEquals } from "../../../code"
import { Quotient, Rational } from "../../numeric"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const areRationalQuotientsEqual = <T extends Rational>(
    rationalQuotientA: Quotient<T>,
    rationalQuotientB: Quotient<T>,
): boolean =>
    deepEquals(
        computeLowestTermsRationalQuotient(rationalQuotientA),
        computeLowestTermsRationalQuotient(rationalQuotientB),
    )

export { areRationalQuotientsEqual }
