import { Override, shallowClone } from "../../../code"
import { BASE_2 } from "../../constants"
import { Decimal, NumericProperties, ScaledVector, Vector } from "../../numeric"
import { log } from "../../typedOperations"
import { IRRATIONAL_SCALED_VECTOR_BASE_VECTOR } from "./constants"

const computeIrrationalScaledVectorFromDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "rational">>,
): ScaledVector<Override<T, "rational", false>> =>
    ({
        vector: shallowClone(IRRATIONAL_SCALED_VECTOR_BASE_VECTOR) as Vector<Override<T, "rational", false>>,
        scaler: [log(decimal, BASE_2) as number, 1],
    }) as ScaledVector<Override<T, "rational", false>>

export { computeIrrationalScaledVectorFromDecimal }
