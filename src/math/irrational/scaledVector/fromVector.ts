import { computeDecimalFromVector, Vector, NumericProperties, ScaledVector } from "../../numeric"
import { computeIrrationalScaledVectorFromDecimal } from "./fromDecimal"

const computeIrrationalScaledVectorFromVector = <T extends NumericProperties>(
    vector: Vector<Omit<T, "rational">>,
): ScaledVector<T & { rational: false }> =>
    computeIrrationalScaledVectorFromDecimal(computeDecimalFromVector(vector))

export { computeIrrationalScaledVectorFromVector }
