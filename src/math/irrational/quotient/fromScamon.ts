import {computeDecimalFromMonzo, computeDecimalFromQuotient, NumericProperties, Quotient, Scamon} from "../../numeric"

const computeIrrationalQuotientFromScamon = <T extends NumericProperties>(
    scamon: Scamon<T>,
): Quotient<T & {rational: false}> =>
    [
        computeDecimalFromMonzo(scamon.monzo) ** computeDecimalFromQuotient(scamon.scaler || [1, 1]),
        1,
    ] as Quotient<T & {rational: false}>

export {
    computeIrrationalQuotientFromScamon,
}
