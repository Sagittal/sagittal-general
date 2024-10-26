import {
    Decimal,
    divide,
    Max,
    Min,
    Multiplier,
    multiply,
    NumericProperties,
    Prime,
    Quotient,
} from "../../../math"
import { Count, Degree } from "../../../types"
import {
    computeIrrationalDecimalFromScaledVector,
    computeIrrationalScaledVectorFromDecimal,
    HALF_SCALER,
} from "../../irrational"
import { computeQuotientProduct, halveQuotient } from "../quotient"
import { ScaledVector } from "./types"

const addScaledVectors = (
    augendScaledVector: ScaledVector,
    addendScaledVector: ScaledVector,
): ScaledVector<{ direction: undefined; rational: false }> =>
    computeIrrationalScaledVectorFromDecimal(
        multiply(
            computeIrrationalDecimalFromScaledVector(augendScaledVector),
            computeIrrationalDecimalFromScaledVector(addendScaledVector),
        ),
    ) as ScaledVector<{ direction: undefined; rational: false }>

const subtractScaledVectors = (
    minuendScaledVector: ScaledVector,
    subtrahendScaledVector: ScaledVector,
): ScaledVector<{ direction: undefined; rational: false }> =>
    computeIrrationalScaledVectorFromDecimal(
        divide(
            computeIrrationalDecimalFromScaledVector(minuendScaledVector),
            computeIrrationalDecimalFromScaledVector(subtrahendScaledVector),
        ),
    ) as ScaledVector<{ direction: undefined; rational: false }>

const halveScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<T & { rational: false }> =>
    ({
        ...scaledVector,
        scaler: scaledVector.scaler ? halveQuotient(scaledVector.scaler) : HALF_SCALER,
    } as ScaledVector<T & { rational: false }>)

const scaleScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    scaler: Quotient | Degree,
): ScaledVector<T & { rational: false }> =>
    ({
        ...scaledVector,
        scaler: scaledVector.scaler ? computeQuotientProduct(scaledVector.scaler, scaler) : scaler,
    } as ScaledVector<T & { rational: false }>)

const maxScaledVector = (...scaledVectors: Array<ScaledVector>): Max<ScaledVector> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    scaledVectors
        .map(computeIrrationalDecimalFromScaledVector)
        .forEach((decimal: Decimal, index: number): void => {
            if (decimal > maxDecimal) {
                maxDecimal = decimal
                maxIndex = index
            }
        })

    return scaledVectors[maxIndex as unknown as number] as Max<ScaledVector>
}

const multiplyScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    multiplier: Decimal<{ integer: true }> & Multiplier,
): ScaledVector<T> => {
    return {
        ...scaledVector,
        vector: scaledVector.vector.map((primeCount: Count<Prime>): Count<Prime> => {
            return multiply(
                primeCount,
                multiplier as Decimal<{ integer: true }> & Multiplier<Count<Prime>>,
            )
        }),
    } as ScaledVector<T>
}

const minScaledVector = (...scaledVectors: Array<ScaledVector>): Min<ScaledVector> => {
    let minDecimal = Infinity as Decimal
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
