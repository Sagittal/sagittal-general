import {computeDecimalFromMonzo, computeDecimalFromQuotient, Decimal, NumericProperties, Scamon} from "../../numeric"

const computeIrrationalDecimalFromScamon = <T extends NumericProperties>(
    scamon: Scamon<T>,
): Decimal<T & {rational: false}> =>
    computeDecimalFromMonzo(scamon.monzo) **
    computeDecimalFromQuotient(scamon.scaler || [1, 1]) as Decimal<T & {rational: false}>

export {
    computeIrrationalDecimalFromScamon,
}
