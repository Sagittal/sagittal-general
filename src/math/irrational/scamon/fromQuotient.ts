import {computeDecimalFromQuotient, NumericProperties, Quotient, Scamon} from "../../numeric"
import {computeIrrationalScamonFromDecimal} from "./fromDecimal"

const computeIrrationalScamonFromQuotient = <T extends NumericProperties>(
    quotient: Quotient<Omit<T, "rational">>,
): Scamon<T & {rational: false}> =>
    computeIrrationalScamonFromDecimal(computeDecimalFromQuotient(quotient))

export {
    computeIrrationalScamonFromQuotient,
}
