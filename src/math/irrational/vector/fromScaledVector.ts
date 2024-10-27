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
): Vector<T & { rational: false }> =>
    scaledVector.vector.map((primeCount: PrimeCount<T>): PrimeCount<T> => {
        return (primeCount *
            computeDecimalFromQuotient(scaledVector.scaler || ([1, 1] as Quotient))) as PrimeCount<T>
    }) as Vector<T & { rational: false }>

export { computeIrrationalVectorFromScaledVector }
