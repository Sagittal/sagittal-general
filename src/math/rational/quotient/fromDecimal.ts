import {Decimal, Denominator, Numerator, NumericProperties, Quotient} from "../../numeric"
import {multiply} from "../../typedOperations"
import {Multiplier} from "../../types"
import {isDecimalInteger} from "../decimal"
import {computeLowestTermsRationalQuotient} from "./lowestTerms"

const computeRationalQuotientFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Quotient<T & {rational: true}> => {
    let integerDenominator: Denominator & Decimal<{integer: true}> = 1 as Denominator & Decimal<{integer: true}>
    let rationalNumerator = rationalDecimal as number
    while (!isDecimalInteger(rationalNumerator)) {
        integerDenominator = multiply(
            integerDenominator,
            10 as Multiplier<Denominator & Decimal<{integer: true}>>,
        )
        rationalNumerator = rationalNumerator * 10
    }

    const rationalQuotient = [
        rationalNumerator as Numerator & Decimal<{integer: true}>,
        integerDenominator,
    ] as Quotient<T & {rational: true}>

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export {
    computeRationalQuotientFromRationalDecimal,
}
