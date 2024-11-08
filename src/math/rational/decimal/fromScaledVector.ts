import { computeDecimalFromVector, Decimal, Rational, ScaledVector } from "../../numeric"

const computeRationalDecimalFromRationalScaledVector = <T extends Rational>(
    rationalScaledVector: ScaledVector<T>,
): Decimal<T> => computeDecimalFromVector(rationalScaledVector.vector) as Decimal<T>

export { computeRationalDecimalFromRationalScaledVector }
