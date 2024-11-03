import {
    computeDecimalFromVector,
    computeDecimalFromQuotient,
    Decimal,
    NumericProperties,
    ScaledVector,
} from "../../numeric"
import { Irrational } from "../types"

const computeIrrationalDecimalFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Decimal<T & Irrational> =>
    (computeDecimalFromVector(scaledVector.vector) **
        computeDecimalFromQuotient(scaledVector.scaler || [1, 1])) as Decimal<T & Irrational>

export { computeIrrationalDecimalFromScaledVector }
