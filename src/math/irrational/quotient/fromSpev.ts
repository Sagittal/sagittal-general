import {computeDecimalFromPev, computeDecimalFromQuotient, NumericProperties, Quotient, Spev} from "../../numeric"

const computeIrrationalQuotientFromSpev = <T extends NumericProperties>(
    spev: Spev<T>,
): Quotient<T & {rational: false}> =>
    [
        computeDecimalFromPev(spev.pev) ** computeDecimalFromQuotient(spev.scaler || [1, 1]),
        1,
    ] as Quotient<T & {rational: false}>

export {
    computeIrrationalQuotientFromSpev,
}
