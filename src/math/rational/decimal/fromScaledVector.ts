import { computeDecimalFromVector, Decimal, NumericProperties, ScaledVector } from "../../numeric"
import { Rational } from "../types"

const computeRationalDecimalFromRationalScaledVector = <T extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & Rational>,
): Decimal<T & Rational> => computeDecimalFromVector(rationalScaledVector.vector) as Decimal<T & Rational>

export { computeRationalDecimalFromRationalScaledVector }
