import { computeDecimalFromVector, Vector, NumericProperties, ScaledVector, Irrational } from "../../numeric"
import { computeIrrationalScaledVectorFromDecimal } from "./fromDecimal"

const computeIrrationalScaledVectorFromVector = <T extends NumericProperties>(
    vector: Vector<T>,
): ScaledVector<T & Irrational> => computeIrrationalScaledVectorFromDecimal(computeDecimalFromVector(vector))

export { computeIrrationalScaledVectorFromVector }
