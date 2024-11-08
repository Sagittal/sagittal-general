import {
    computeDecimalFromVector,
    computeDecimalFromQuotient,
    NumericProperties,
    Quotient,
    ScaledVector,
    Irrational,
} from "../../numeric"

const computeIrrationalQuotientFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Quotient<T & Irrational> =>
    [
        computeDecimalFromVector(scaledVector.vector) **
            computeDecimalFromQuotient(scaledVector.scaler || [1, 1]),
        1,
    ] as Quotient<T & Irrational>

export { computeIrrationalQuotientFromScaledVector }
