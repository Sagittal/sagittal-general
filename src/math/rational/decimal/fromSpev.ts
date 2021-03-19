import {computeDecimalFromPev, Decimal, NumericProperties, Spev} from "../../numeric"

const computeRationalDecimalFromRationalSpev = <T extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
): Decimal<T & {rational: true}> =>
    computeDecimalFromPev(rationalSpev.pev)

export {
    computeRationalDecimalFromRationalSpev,
}
