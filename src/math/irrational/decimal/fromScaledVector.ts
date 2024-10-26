import {
    computeDecimalFromVector,
    computeDecimalFromQuotient,
    Decimal,
    NumericProperties,
    ScaledVector,
} from "../../numeric"

const computeIrrationalDecimalFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Decimal<T & { rational: false }> =>
    (computeDecimalFromVector(scaledVector.vector) **
        computeDecimalFromQuotient(scaledVector.scaler || [1, 1])) as Decimal<
        T & { rational: false }
    >

export { computeIrrationalDecimalFromScaledVector }
