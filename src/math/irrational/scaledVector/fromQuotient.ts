import {
    computeDecimalFromQuotient,
    Irrational,
    NumericProperties,
    Quotient,
    ScaledVector,
} from "../../numeric"
import { computeIrrationalScaledVectorFromDecimal } from "./fromDecimal"

const computeIrrationalScaledVectorFromQuotient = <T extends NumericProperties>(
    quotient: Quotient<T>,
): ScaledVector<T & Irrational> =>
    computeIrrationalScaledVectorFromDecimal(computeDecimalFromQuotient(quotient))

export { computeIrrationalScaledVectorFromQuotient }
