import {computeDecimalFromQuotient, Decimal, Monzo, NumericProperties, Quotient, Scamon} from "../../numeric"
import {Prime} from "../../rational"
import {Exponent} from "../../types"

const computeIrrationalMonzoFromScamon = <T extends NumericProperties>(
    scamon: Scamon<T>,
): Monzo<T & {rational: false}> =>
    scamon.monzo
        .map((primeExponent: Decimal<{integer: true}> & Exponent<Prime>): Exponent<Prime> => {
            return primeExponent * computeDecimalFromQuotient(
                scamon.scaler || [1, 1] as Quotient,
            ) as Exponent<Prime>
        }) as Monzo<T & {rational: false}>

export {
    computeIrrationalMonzoFromScamon,
}
