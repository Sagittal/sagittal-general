import {computeQuotientFromVector, NumericProperties, Quotient, ScaledVector} from "../../numeric"

const computeRationalQuotientFromRationalScaledVector = <T extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & {rational: true}>,
): Quotient<T & {rational: true}> =>
    computeQuotientFromVector(rationalScaledVector.vector)

export {
    computeRationalQuotientFromRationalScaledVector,
}
