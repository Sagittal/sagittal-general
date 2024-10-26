import { shallowClone } from "../../../code"
import { BASE_2 } from "../../constants"
import { Decimal, NumericProperties, ScaledVector } from "../../numeric"
import { log } from "../../typedOperations"
import { IRRATIONAL_SCALED_VECTOR_BASE_VECTOR } from "./constants"

const computeIrrationalScaledVectorFromDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "rational">>,
): ScaledVector<T & { rational: false }> =>
    ({
        vector: shallowClone(IRRATIONAL_SCALED_VECTOR_BASE_VECTOR),
        scaler: [log(decimal, BASE_2) as Decimal, 1],
    } as ScaledVector<T & { rational: false }>)

export { computeIrrationalScaledVectorFromDecimal }
