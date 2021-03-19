import {computeDecimalFromPev, computeDecimalFromQuotient, Decimal, NumericProperties, Spev} from "../../numeric"

const computeIrrationalDecimalFromSpev = <T extends NumericProperties>(
    spev: Spev<T>,
): Decimal<T & {rational: false}> =>
    computeDecimalFromPev(spev.pev) **
    computeDecimalFromQuotient(spev.scaler || [1, 1]) as Decimal<T & {rational: false}>

export {
    computeIrrationalDecimalFromSpev,
}
