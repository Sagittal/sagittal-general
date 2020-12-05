import {Decimal, Monzo, NumericProperties, Quotient, Scamon} from "../../numeric"
import {computeRationalMonzoFromRationalDecimal, computeRationalMonzoFromRationalQuotient} from "../monzo"

const computeRationalScamonFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Scamon<T & {rational: true}> =>
    ({
        monzo: computeRationalMonzoFromRationalDecimal(rationalDecimal),
    }) as Scamon<T & {rational: true}>

const computeRationalScamonFromRationalMonzo = <T extends NumericProperties>(
    rationalMonzo: Monzo<T & {rational: true}>,
): Scamon<T & {rational: true}> =>
    ({monzo: rationalMonzo}) as Scamon<T & {rational: true}>

const computeRationalScamonFromRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & {rational: true}>,
): Scamon<T & {rational: true}> =>
    computeRationalScamonFromRationalMonzo(computeRationalMonzoFromRationalQuotient(rationalQuotient))

export {
    computeRationalScamonFromRationalDecimal,
    computeRationalScamonFromRationalMonzo,
    computeRationalScamonFromRationalQuotient,
}
