import {invertPev, Pev, NumericProperties, Quotient, sumPevs} from "../../numeric"
import {computeIntegerPevFromIntegerDecimal} from "./fromDecimal"

const computeRationalPevFromRationalQuotient = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T & {rational: true}>,
): Pev<T & {rational: true}> => {
    const positiveFactors = computeIntegerPevFromIntegerDecimal(numerator)
    const negativeFactors = invertPev(computeIntegerPevFromIntegerDecimal(denominator))

    return sumPevs(positiveFactors, negativeFactors) as Pev as Pev<T & {rational: true}>
}

export {
    computeRationalPevFromRationalQuotient,
}
