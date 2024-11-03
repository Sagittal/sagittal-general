import {
    computeDecimalFromVector,
    computeDecimalFromQuotient,
    NumericProperties,
    Quotient,
    ScaledVector,
} from "../../numeric"
import { Irrational } from "../types"

const computeIrrationalQuotientFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Quotient<T & Irrational> =>
    [
        computeDecimalFromVector(scaledVector.vector) **
            computeDecimalFromQuotient(scaledVector.scaler || [1, 1]),
        1,
    ] as Quotient<T & Irrational>

export { computeIrrationalQuotientFromScaledVector }
