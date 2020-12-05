import {Monzo, NumericProperties, Scamon} from "../../numeric"

const computeRationalMonzoFromRationalScamon = <T extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
): Monzo<T & {rational: true}> =>
    rationalScamon.monzo

export {
    computeRationalMonzoFromRationalScamon,
}
