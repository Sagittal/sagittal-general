import {computeDecimalFromQuotient, NumericProperties, Quotient, Spev} from "../../numeric"
import {computeIrrationalSpevFromDecimal} from "./fromDecimal"

const computeIrrationalSpevFromQuotient = <T extends NumericProperties>(
    quotient: Quotient<Omit<T, "rational">>,
): Spev<T & {rational: false}> =>
    computeIrrationalSpevFromDecimal(computeDecimalFromQuotient(quotient))

export {
    computeIrrationalSpevFromQuotient,
}
