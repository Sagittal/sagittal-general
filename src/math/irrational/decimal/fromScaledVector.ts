import { NoProperties } from "../../../code"
import {
    computeDecimalFromVector,
    computeDecimalFromQuotient,
    Decimal,
    NumericProperties,
    ScaledVector,
    Irrational,
} from "../../numeric"

const computeIrrationalDecimalFromScaledVector = <T extends NumericProperties = NoProperties>(
    scaledVector: ScaledVector<T>,
): Decimal<T & Irrational> =>
    (computeDecimalFromVector(scaledVector.vector) **
        computeDecimalFromQuotient(scaledVector.scaler || [1, 1])) as Decimal<T & Irrational>

export { computeIrrationalDecimalFromScaledVector }
