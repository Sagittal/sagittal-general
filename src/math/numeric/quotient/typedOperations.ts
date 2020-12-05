import {multiply} from "../../typedOperations"
import {NumericProperties} from "../types"
import {Quotient} from "./types"

const computeQuotientProduct = <T extends NumericProperties>(...quotients: Array<Quotient<T>>): Quotient<T> =>
    quotients.reduce(
        (
            [productNumerator, productDenominator]: Quotient<T>,
            [numerator, denominator]: Quotient<T>,
        ): Quotient<T> => {
            return [
                multiply(productNumerator, numerator),
                multiply(productDenominator, denominator),
            ] as Quotient<T>
        },
        [1, 1] as Quotient<T>,
    )

const halveQuotient = <T extends NumericProperties>([numerator, denominator]: Quotient<T>): Quotient<T> => {
    return [
        numerator,
        denominator * 2,
    ] as Quotient<T>
}

export {
    computeQuotientProduct,
    halveQuotient,
}
