import { deepEquals } from "../../../code"
import { Decimal, Integer, Quotient, Rational } from "../../numeric"
import { divide } from "../../typedOperations"
import { computeGreatestCommonDivisor } from "../common"

const computeLowestTermsRationalQuotient = <T extends Rational>([
    numerator,
    denominator,
]: Quotient<T>): Quotient<T> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor<Decimal<Integer>>(numerator, denominator)

    return [
        divide<Decimal<Integer>>(numerator, greatestCommonDivisor),
        divide<Decimal<Integer>>(denominator, greatestCommonDivisor),
    ] as Quotient<T>
}

const isLowestTerms = <T extends Rational>(rationalQuotient: Quotient<T>): boolean =>
    deepEquals(rationalQuotient, computeLowestTermsRationalQuotient(rationalQuotient))

export { isLowestTerms, computeLowestTermsRationalQuotient }
