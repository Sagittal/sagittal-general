import { computeDecimalFromVector, Vector, NumericProperties, ScaledVector } from "../../numeric"
import { Irrational } from "../types"
import { computeIrrationalScaledVectorFromDecimal } from "./fromDecimal"

const computeIrrationalScaledVectorFromVector = <T extends NumericProperties>(
    vector: Vector<Omit<T, "rational">>,
): ScaledVector<T & Irrational> =>
    computeIrrationalScaledVectorFromDecimal(computeDecimalFromVector(vector)) as ScaledVector<T & Irrational>

export { computeIrrationalScaledVectorFromVector }
