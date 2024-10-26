import { Count } from "../../../types"
import {
    computeDecimalFromQuotient,
    Decimal,
    Vector,
    NumericProperties,
    Quotient,
    ScaledVector,
} from "../../numeric"
import { Prime } from "../../rational"

const computeIrrationalVectorFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Vector<T & { rational: false }> =>
    scaledVector.vector.map(
        (primeCount: Decimal<{ integer: true }> & Count<Prime>): Count<Prime> => {
            return (primeCount *
                computeDecimalFromQuotient(
                    scaledVector.scaler || ([1, 1] as Quotient),
                )) as Count<Prime>
        },
    ) as Vector<T & { rational: false }>

export { computeIrrationalVectorFromScaledVector }
