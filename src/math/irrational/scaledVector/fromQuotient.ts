import {
    computeDecimalFromQuotient,
    NumericProperties,
    Quotient,
    ScaledVector,
} from "../../numeric"
import { computeIrrationalScaledVectorFromDecimal } from "./fromDecimal"

const computeIrrationalScaledVectorFromQuotient = <T extends NumericProperties>(
    quotient: Quotient<Omit<T, "rational">>,
): ScaledVector<T & { rational: false }> =>
    computeIrrationalScaledVectorFromDecimal(computeDecimalFromQuotient(quotient))

export { computeIrrationalScaledVectorFromQuotient }
