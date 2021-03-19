import {Decimal, Pev, NumericProperties, Quotient, Spev} from "../../numeric"
import {computeRationalPevFromRationalDecimal, computeRationalPevFromRationalQuotient} from "../pev"

const computeRationalSpevFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Spev<T & {rational: true}> =>
    ({
        pev: computeRationalPevFromRationalDecimal(rationalDecimal),
    }) as Spev<T & {rational: true}>

const computeRationalSpevFromRationalPev = <T extends NumericProperties>(
    rationalPev: Pev<T & {rational: true}>,
): Spev<T & {rational: true}> =>
    ({pev: rationalPev}) as Spev<T & {rational: true}>

const computeRationalSpevFromRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & {rational: true}>,
): Spev<T & {rational: true}> =>
    computeRationalSpevFromRationalPev(computeRationalPevFromRationalQuotient(rationalQuotient))

export {
    computeRationalSpevFromRationalDecimal,
    computeRationalSpevFromRationalPev,
    computeRationalSpevFromRationalQuotient,
}
