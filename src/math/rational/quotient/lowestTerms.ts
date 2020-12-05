import {deepEquals} from "../../../code"
import {Decimal, NumericProperties, Quotient} from "../../numeric"
import {divide} from "../../typedOperations"
import {computeGreatestCommonDivisor} from "../common"

const computeLowestTermsRationalQuotient = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T & {rational: true}>,
): Quotient<T & {rational: true}> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as Decimal<{integer: true}>,
        denominator as Decimal<{integer: true}>,
    )

    return [
        divide(numerator, greatestCommonDivisor),
        divide(denominator, greatestCommonDivisor),
    ] as Quotient<T & {rational: true}>
}

const isLowestTerms = (rationalQuotient: Quotient<{rational: true}>): boolean =>
    deepEquals(rationalQuotient, computeLowestTermsRationalQuotient(rationalQuotient))

export {
    isLowestTerms,
    computeLowestTermsRationalQuotient,
}
