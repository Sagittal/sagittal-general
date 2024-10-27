import { invertVector, Vector, NumericProperties, Quotient, sumVectors, Decimal } from "../../numeric"
import { computeIntegerVectorFromIntegerDecimal } from "./fromDecimal"

const computeRationalVectorFromRationalQuotient = <T extends NumericProperties>([
    numerator,
    denominator,
]: Quotient<T & { rational: true }>): Vector<T & { rational: true }> => {
    const positiveFactors = computeIntegerVectorFromIntegerDecimal(numerator) as Vector<
        T & { rational: true }
    >
    const negativeFactors = invertVector(computeIntegerVectorFromIntegerDecimal(denominator)) as Vector<
        Omit<T, "direction"> & { rational: true }
    >

    return sumVectors(positiveFactors, negativeFactors) as Vector<T & { rational: true }>
}

export { computeRationalVectorFromRationalQuotient }
