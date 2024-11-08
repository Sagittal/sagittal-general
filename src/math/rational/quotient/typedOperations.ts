import { computeQuotientProduct, halveQuotient, Quotient, Rational } from "../../numeric"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const computeRationalQuotientProduct = <T extends Rational>(
    ...rationalQuotients: Array<Quotient<T>>
): Quotient<T> => computeLowestTermsRationalQuotient(computeQuotientProduct(...rationalQuotients))

const halveRationalQuotient = <T extends Rational>(rationalQuotient: Quotient<T>): Quotient<T> =>
    computeLowestTermsRationalQuotient(halveQuotient(rationalQuotient))

export { computeRationalQuotientProduct, halveRationalQuotient }
