import { invertVector, Vector, NumericProperties, Quotient, sumVectors } from "../../numeric"
import { Rational } from "../types"
import { computeIntegerVectorFromIntegerDecimal } from "./fromDecimal"

const computeRationalVectorFromRationalQuotient = <T extends NumericProperties>([
    numerator,
    denominator,
]: Quotient<T & Rational>): Vector<T & Rational> => {
    const numeratorFactors = computeIntegerVectorFromIntegerDecimal(numerator) as Vector<T & Rational>
    const denominatorFactors = computeIntegerVectorFromIntegerDecimal(denominator) as Vector<T & Rational>

    return sumVectors(numeratorFactors, invertVector(denominatorFactors)) as Vector<T & Rational>
}

export { computeRationalVectorFromRationalQuotient }
