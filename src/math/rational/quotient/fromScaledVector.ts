import { computeQuotientFromVector, NumericProperties, Quotient, ScaledVector } from "../../numeric"
import { Rational } from "../types"

const computeRationalQuotientFromRationalScaledVector = <T extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & Rational>,
): Quotient<T & Rational> => computeQuotientFromVector(rationalScaledVector.vector) as Quotient<T & Rational>

export { computeRationalQuotientFromRationalScaledVector }
