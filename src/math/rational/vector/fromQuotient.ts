import {invertVector, Vector, NumericProperties, Quotient, sumVectors} from "../../numeric"
import {computeIntegerVectorFromIntegerDecimal} from "./fromDecimal"

const computeRationalVectorFromRationalQuotient = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T & {rational: true}>,
): Vector<T & {rational: true}> => {
    const positiveFactors = computeIntegerVectorFromIntegerDecimal(numerator)
    const negativeFactors = invertVector(computeIntegerVectorFromIntegerDecimal(denominator))

    return sumVectors(positiveFactors, negativeFactors) as Vector as Vector<T & {rational: true}>
}

export {
    computeRationalVectorFromRationalQuotient,
}
