import { Override } from "../../../code"
import { computeDecimalFromQuotient, NumericProperties, Quotient, ScaledVector } from "../../numeric"
import { computeIrrationalScaledVectorFromDecimal } from "./fromDecimal"

const computeIrrationalScaledVectorFromQuotient = <T extends NumericProperties>(
    quotient: Quotient<T>,
): ScaledVector<Override<T, "rational", false>> =>
    computeIrrationalScaledVectorFromDecimal(computeDecimalFromQuotient(quotient)) as ScaledVector<
        Override<T, "rational", false>
    >

export { computeIrrationalScaledVectorFromQuotient }
