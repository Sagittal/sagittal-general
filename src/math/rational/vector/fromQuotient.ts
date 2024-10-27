import { invertVector, Vector, NumericProperties, Quotient, sumVectors, Decimal } from "../../numeric"
import { computeIntegerVectorFromIntegerDecimal } from "./fromDecimal"

const computeRationalVectorFromRationalQuotient = <T extends NumericProperties>([
    numerator,
    denominator,
]: Quotient<T & { rational: true }>): Vector<T & { rational: true }> => {
    const positiveFactors: Vector<T & { rational: true }> = computeIntegerVectorFromIntegerDecimal(numerator)
    const negativeFactors = invertVector(computeIntegerVectorFromIntegerDecimal(denominator))

    return sumVectors(positiveFactors, negativeFactors)
}

export { computeRationalVectorFromRationalQuotient }
