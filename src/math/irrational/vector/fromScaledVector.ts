import { isUndefined } from "../../../code"
import {
    computeDecimalFromQuotient,
    Vector,
    NumericProperties,
    ScaledVector,
    PrimeCount,
    Irrational,
} from "../../numeric"

const computeIrrationalVectorFromScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): Vector<T & Irrational> =>
    (scaledVector.vector as Vector<T>)?.map((primeCount: PrimeCount<T>): PrimeCount<T & Irrational> => {
        return (primeCount *
            (isUndefined(scaledVector.scaler)
                ? 1
                : computeDecimalFromQuotient(scaledVector.scaler))) as PrimeCount<T & Irrational>
    }) as Vector<T & Irrational>

export { computeIrrationalVectorFromScaledVector }
