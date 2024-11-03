import { Override } from "../../../code"
import {
    computeDecimalFromQuotient,
    Vector,
    NumericProperties,
    Quotient,
    ScaledVector,
    PrimeCount,
} from "../../numeric"

const computeIrrationalVectorFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Vector<Override<T, "rational", false>> =>
    (scaledVector.vector as Vector<Override<T, "rational", undefined>>).map(
        (
            primeCount: PrimeCount<Override<T, "rational", undefined>>,
        ): PrimeCount<Override<T, "rational", false>> => {
            return (primeCount *
                computeDecimalFromQuotient(scaledVector.scaler || ([1, 1] as Quotient))) as PrimeCount<
                Override<T, "rational", false>
            >
        },
    ) as Vector<Override<T, "rational", false>>

export { computeIrrationalVectorFromScaledVector }
