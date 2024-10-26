import { isUndefined } from "../../../code"
import { NumericProperties, Quotient, ScaledVector } from "../../numeric"

const isScaledVectorRational = <T extends NumericProperties>(
    candidateRationalScaledVector: ScaledVector<T>,
): candidateRationalScaledVector is ScaledVector<T & { rational: true }> =>
    isUndefined((candidateRationalScaledVector as { scaler: Quotient }).scaler)

export { isScaledVectorRational }
