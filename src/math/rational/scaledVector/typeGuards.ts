import { isUndefined } from "../../../code"
import { NumericProperties, Quotient, ScaledVector } from "../../numeric"
import { Rational } from "../types"

const isScaledVectorRational = <T extends NumericProperties>(
    candidateRationalScaledVector: ScaledVector<T>,
): candidateRationalScaledVector is ScaledVector<T & Rational> =>
    isUndefined((candidateRationalScaledVector as { scaler: Quotient }).scaler)

export { isScaledVectorRational }
