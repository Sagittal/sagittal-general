import { Vector, NumericProperties, ScaledVector } from "../../numeric"
import { Rational } from "../types"

const computeRationalVectorFromRationalScaledVector = <T extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & Rational>,
): Vector<T & Rational> => rationalScaledVector.vector as Vector<T & Rational>

export { computeRationalVectorFromRationalScaledVector }
