import { computeQuotientFromVector, Quotient, Rational, ScaledVector } from "../../numeric"

const computeRationalQuotientFromRationalScaledVector = <T extends Rational>(
    rationalScaledVector: ScaledVector<T>,
): Quotient<T> => computeQuotientFromVector(rationalScaledVector.vector) as Quotient<T>

export { computeRationalQuotientFromRationalScaledVector }
