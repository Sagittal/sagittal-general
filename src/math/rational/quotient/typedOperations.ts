import { computeQuotientProduct, halveQuotient, NumericProperties, Quotient } from "../../numeric"
import { Rational } from "../types"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const computeRationalQuotientProduct = <T extends NumericProperties>(
    ...rationalQuotients: Array<Quotient<T & Rational>>
): Quotient<T & Rational> => computeLowestTermsRationalQuotient(computeQuotientProduct(...rationalQuotients))

const halveRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & Rational>,
): Quotient<T & Rational> => computeLowestTermsRationalQuotient(halveQuotient(rationalQuotient))

export { computeRationalQuotientProduct, halveRationalQuotient }
