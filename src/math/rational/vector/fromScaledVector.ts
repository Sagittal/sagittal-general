import { Vector, NumericProperties, ScaledVector } from "../../numeric"

const computeRationalVectorFromRationalScaledVector = <T extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & { rational: true }>,
): Vector<T & { rational: true }> => rationalScaledVector.vector

export { computeRationalVectorFromRationalScaledVector }
