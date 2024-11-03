import { deepEquals } from "../../../code"
import { Decimal, NumericProperties, Quotient } from "../../numeric"
import { divide } from "../../typedOperations"
import { computeGreatestCommonDivisor } from "../common"
import { Integer, Rational } from "../types"

const computeLowestTermsRationalQuotient = <T extends NumericProperties>([numerator, denominator]: Quotient<
    T & Rational
>): Quotient<T & Rational> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as Decimal<Integer>,
        denominator as Decimal<Integer>,
    )

    return [divide(numerator, greatestCommonDivisor), divide(denominator, greatestCommonDivisor)] as Quotient<
        T & Rational
    >
}

const isLowestTerms = (rationalQuotient: Quotient): boolean =>
    deepEquals(rationalQuotient, computeLowestTermsRationalQuotient(rationalQuotient))

export { isLowestTerms, computeLowestTermsRationalQuotient }
