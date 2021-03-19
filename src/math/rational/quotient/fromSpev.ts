import {computeQuotientFromPev, NumericProperties, Quotient, Spev} from "../../numeric"

const computeRationalQuotientFromRationalSpev = <T extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
): Quotient<T & {rational: true}> =>
    computeQuotientFromPev(rationalSpev.pev)

export {
    computeRationalQuotientFromRationalSpev,
}
