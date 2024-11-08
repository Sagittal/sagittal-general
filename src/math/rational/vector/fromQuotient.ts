import { invertVector, Vector, Quotient, sumVectors, Rational, Integer, Decimal } from "../../numeric"
import { computeIntegerVectorFromIntegerDecimal } from "./fromDecimal"

const computeRationalVectorFromRationalQuotient = <T extends Rational>([
    numerator,
    denominator,
]: Quotient<T>): Vector<T> => {
    const numeratorFactors = computeIntegerVectorFromIntegerDecimal(numerator as Decimal<T>) as Vector<
        T & Integer
    >
    const denominatorFactors = computeIntegerVectorFromIntegerDecimal(denominator as Decimal<T>) as Vector<
        T & Integer
    >

    return sumVectors(numeratorFactors, invertVector(denominatorFactors) as Vector) as Vector<T>
}

export { computeRationalVectorFromRationalQuotient }
