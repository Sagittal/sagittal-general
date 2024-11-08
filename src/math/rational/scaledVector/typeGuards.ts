import { isUndefined } from "../../../code"
import { NumericProperties, Quotient, Rational, ScaledVector } from "../../numeric"

const isScaledVectorRational = <T extends NumericProperties>(
    candidateRationalScaledVector: ScaledVector<T>,
): candidateRationalScaledVector is ScaledVector<T & Rational> =>
    isUndefined((candidateRationalScaledVector as { scaler: Quotient }).scaler)

export { isScaledVectorRational }
