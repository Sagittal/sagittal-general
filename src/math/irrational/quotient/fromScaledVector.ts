import {
    computeDecimalFromVector,
    computeDecimalFromQuotient,
    NumericProperties,
    Quotient,
    ScaledVector,
} from "../../numeric"

const computeIrrationalQuotientFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Quotient<T & { rational: false }> =>
    [
        computeDecimalFromVector(scaledVector.vector) **
            computeDecimalFromQuotient(scaledVector.scaler || [1, 1]),
        1,
    ] as Quotient<T & { rational: false }>

export { computeIrrationalQuotientFromScaledVector }
