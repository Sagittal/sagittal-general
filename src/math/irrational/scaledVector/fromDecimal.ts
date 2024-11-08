import { shallowClone } from "../../../code"
import { BASE_2 } from "../../constants"
import { Decimal, Irrational, NumericProperties, Quotient, ScaledVector } from "../../numeric"
import { log } from "../../typedOperations"
import { IRRATIONAL_SCALED_VECTOR_BASE_VECTOR } from "./constants"

const computeIrrationalScaledVectorFromDecimal = <T extends NumericProperties>(
    decimal: Decimal<T>,
): ScaledVector<T & Irrational> =>
    ({
        vector: shallowClone(IRRATIONAL_SCALED_VECTOR_BASE_VECTOR),
        scaler: [log(decimal, BASE_2) as number, 1] as Quotient,
    }) as ScaledVector<T & Irrational>

export { computeIrrationalScaledVectorFromDecimal }
