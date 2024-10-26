import { computeDecimalFromVector, Decimal, NumericProperties, ScaledVector } from "../../numeric"

const computeRationalDecimalFromRationalScaledVector = <T extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & { rational: true }>,
): Decimal<T & { rational: true }> => computeDecimalFromVector(rationalScaledVector.vector)

export { computeRationalDecimalFromRationalScaledVector }
