import { Override } from "../../../code"
import {
    Decimal,
    divide,
    Max,
    Min,
    Multiplier,
    multiply,
    NumericProperties,
    PrimeCount,
    Quotient,
} from "../../../math"
import { Degree } from "../../../types"
import {
    computeIrrationalDecimalFromScaledVector,
    computeIrrationalScaledVectorFromDecimal,
    HALF_SCALER,
    Irrational,
} from "../../irrational"
import { computeQuotientProduct, halveQuotient } from "../quotient"
import { ScaledVector } from "./types"

const addScaledVectors = <T extends NumericProperties>(
    augendScaledVector: ScaledVector<T>,
    addendScaledVector: ScaledVector<T>,
): ScaledVector<T & { direction: undefined; rational: undefined; sign: undefined }> =>
    computeIrrationalScaledVectorFromDecimal(
        multiply(
            computeIrrationalDecimalFromScaledVector(augendScaledVector),
            computeIrrationalDecimalFromScaledVector(addendScaledVector),
        ),
    ) as ScaledVector<T & { direction: undefined; rational: undefined; sign: undefined }>

const subtractScaledVectors = <T extends NumericProperties>(
    minuendScaledVector: ScaledVector<T>,
    subtrahendScaledVector: ScaledVector<T>,
): ScaledVector<T & { direction: undefined; rational: undefined; sign: undefined }> =>
    computeIrrationalScaledVectorFromDecimal(
        divide(
            computeIrrationalDecimalFromScaledVector(minuendScaledVector),
            computeIrrationalDecimalFromScaledVector(subtrahendScaledVector),
        ),
    ) as ScaledVector<T & { direction: undefined; rational: undefined; sign: undefined }>

const halveScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<T & Irrational> =>
    ({
        ...scaledVector,
        scaler: scaledVector.scaler ? halveQuotient(scaledVector.scaler) : HALF_SCALER,
    }) as ScaledVector<T & Irrational>

const scaleScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    scaler: Quotient | Degree,
): ScaledVector<T & Irrational> =>
    ({
        ...scaledVector,
        scaler: scaledVector.scaler ? computeQuotientProduct(scaledVector.scaler, scaler) : scaler,
    }) as ScaledVector<T & Irrational>

const maxScaledVector = <T extends NumericProperties>(
    ...scaledVectors: Array<ScaledVector<T>>
): Max<ScaledVector<T>> => {
    let maxDecimal = -Infinity
    let maxIndex = undefined

    scaledVectors
        .map(computeIrrationalDecimalFromScaledVector)
        .forEach((decimal: Decimal, index: number): void => {
            if (decimal > maxDecimal) {
                maxDecimal = decimal
                maxIndex = index
            }
        })

    return scaledVectors[maxIndex as unknown as number] as Max<ScaledVector<T>>
}

const multiplyScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    multiplier: Multiplier,
): ScaledVector<T> => {
    return {
        ...scaledVector,
        vector: scaledVector.vector.map(
            (
                primeCount: PrimeCount<Override<T, "rational", true>>,
            ): PrimeCount<Override<T, "rational", true>> => {
                return multiply(
                    primeCount,
                    multiplier as Multiplier<PrimeCount<Override<T, "rational", true>>>,
                )
            },
        ),
    } as ScaledVector<T>
}

const minScaledVector = (...scaledVectors: Array<ScaledVector>): Min<ScaledVector> => {
    let minDecimal = Infinity
    let minIndex = undefined

    scaledVectors
        .map(computeIrrationalDecimalFromScaledVector)
        .forEach((decimal: Decimal, index: number): void => {
            if (decimal < minDecimal) {
                minDecimal = decimal
                minIndex = index
            }
        })

    return scaledVectors[minIndex as unknown as number] as Min<ScaledVector>
}

export {
    addScaledVectors,
    halveScaledVector,
    maxScaledVector,
    minScaledVector,
    subtractScaledVectors,
    multiplyScaledVector,
    scaleScaledVector,
}
