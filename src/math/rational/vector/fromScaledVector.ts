import { Vector, ScaledVector, Rational } from "../../numeric"

const computeRationalVectorFromRationalScaledVector = <T extends Rational>(
    rationalScaledVector: ScaledVector<T>,
): Vector<T> => rationalScaledVector.vector as Vector<T>

export { computeRationalVectorFromRationalScaledVector }
