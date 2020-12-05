import {invertMonzo, Monzo, NumericProperties, Quotient, sumMonzos} from "../../numeric"
import {computeIntegerMonzoFromIntegerDecimal} from "./fromDecimal"

const computeRationalMonzoFromRationalQuotient = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T & {rational: true}>,
): Monzo<T & {rational: true}> => {
    const positiveFactors = computeIntegerMonzoFromIntegerDecimal(numerator)
    const negativeFactors = invertMonzo(computeIntegerMonzoFromIntegerDecimal(denominator))

    return sumMonzos(positiveFactors, negativeFactors) as Monzo as Monzo<T & {rational: true}>
}

export {
    computeRationalMonzoFromRationalQuotient,
}
