import {Pev, NumericProperties, Spev} from "../../numeric"

const computeRationalPevFromRationalSpev = <T extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
): Pev<T & {rational: true}> =>
    rationalSpev.pev

export {
    computeRationalPevFromRationalSpev,
}
