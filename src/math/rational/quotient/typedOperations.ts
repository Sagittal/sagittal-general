import {computeQuotientProduct, halveQuotient, NumericProperties, Quotient} from "../../numeric"
import {computeLowestTermsRationalQuotient} from "./lowestTerms"

const computeRationalQuotientProduct = <T extends NumericProperties>(
    ...rationalQuotients: Array<Quotient<T & {rational: true}>>
): Quotient<T & {rational: true}> =>
    computeLowestTermsRationalQuotient(computeQuotientProduct(...rationalQuotients))

const halveRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & {rational: true}>,
): Quotient<T & {rational: true}> =>
    computeLowestTermsRationalQuotient(halveQuotient(rationalQuotient))

export {
    computeRationalQuotientProduct,
}
