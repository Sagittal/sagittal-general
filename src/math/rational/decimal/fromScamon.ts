import {computeDecimalFromMonzo, Decimal, NumericProperties, Scamon} from "../../numeric"

const computeRationalDecimalFromRationalScamon = <T extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
): Decimal<T & {rational: true}> =>
    computeDecimalFromMonzo(rationalScamon.monzo)

export {
    computeRationalDecimalFromRationalScamon,
}
