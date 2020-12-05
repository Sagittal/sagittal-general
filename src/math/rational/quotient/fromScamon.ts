import {computeQuotientFromMonzo, NumericProperties, Quotient, Scamon} from "../../numeric"

const computeRationalQuotientFromRationalScamon = <T extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
): Quotient<T & {rational: true}> =>
    computeQuotientFromMonzo(rationalScamon.monzo)

export {
    computeRationalQuotientFromRationalScamon,
}
