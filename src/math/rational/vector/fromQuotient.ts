import { invertVector, Vector, NumericProperties, Quotient, sumVectors } from "../../numeric"
import { computeIntegerVectorFromIntegerDecimal } from "./fromDecimal"

const computeRationalVectorFromRationalQuotient = <T extends NumericProperties>([
    numerator,
    denominator,
]: Quotient<T & { rational: true }>): Vector<T & { rational: true }> => {
    const numeratorFactors = computeIntegerVectorFromIntegerDecimal(numerator) as Vector<
        T & { rational: true }
    >
    const denominatorFactors = computeIntegerVectorFromIntegerDecimal(denominator) as Vector<
        T & { rational: true }
    >

    return sumVectors(numeratorFactors, invertVector(denominatorFactors)) as Vector<T & { rational: true }>
}

export { computeRationalVectorFromRationalQuotient }
