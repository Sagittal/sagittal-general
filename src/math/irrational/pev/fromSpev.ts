import {computeDecimalFromQuotient, Decimal, Pev, NumericProperties, Quotient, Spev} from "../../numeric"
import {Prime} from "../../rational"
import {Exponent} from "../../types"

const computeIrrationalPevFromSpev = <T extends NumericProperties>(
    spev: Spev<T>,
): Pev<T & {rational: false}> =>
    spev.pev
        .map((primeExponent: Decimal<{integer: true}> & Exponent<Prime>): Exponent<Prime> => {
            return primeExponent * computeDecimalFromQuotient(
                spev.scaler || [1, 1] as Quotient,
            ) as Exponent<Prime>
        }) as Pev<T & {rational: false}>

export {
    computeIrrationalPevFromSpev,
}
