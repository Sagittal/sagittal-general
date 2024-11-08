import { isUndefined } from "../../../code"
import {
    Decimal,
    divide,
    Irrational,
    Max,
    Min,
    Multiplier,
    multiply,
    NumericProperties,
    PrimeCount,
    Quotient,
    Rational,
} from "../../../math"
import { Degree } from "../../../types"
import {
    computeIrrationalDecimalFromScaledVector,
    computeIrrationalScaledVectorFromDecimal,
    HALF_SCALER,
} from "../../irrational"
import { computeQuotientProduct, halveQuotient } from "../quotient"
import { UnknownDirection, UnknownSign } from "../types"
import { ScaledVector } from "./types"

const addScaledVectors = <T extends NumericProperties>(
    augendScaledVector: ScaledVector<T>,
    addendScaledVector: ScaledVector<T>,
): ScaledVector<T & UnknownDirection & UnknownSign> =>
    computeIrrationalScaledVectorFromDecimal(
        multiply(
            computeIrrationalDecimalFromScaledVector(augendScaledVector),
            computeIrrationalDecimalFromScaledVector(addendScaledVector),
        ),
    ) as ScaledVector<T & UnknownDirection & UnknownSign>

const subtractScaledVectors = <T extends NumericProperties>(
    minuendScaledVector: ScaledVector<T>,
    subtrahendScaledVector: ScaledVector<T>,
): ScaledVector<T & UnknownDirection & UnknownSign> =>
    computeIrrationalScaledVectorFromDecimal(
        divide(
            computeIrrationalDecimalFromScaledVector(minuendScaledVector),
            computeIrrationalDecimalFromScaledVector(subtrahendScaledVector),
        ),
    ) as ScaledVector<T & UnknownDirection & UnknownSign>

const halveScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T & (Rational | Irrational)>,
): ScaledVector<T & Irrational> =>
    ({
        ...scaledVector,
        scaler: (isUndefined(scaledVector.scaler)
            ? HALF_SCALER
            : halveQuotient(scaledVector.scaler)) as Quotient,
    }) as ScaledVector<T & Irrational>

const scaleScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T & (Rational | Irrational)>,
    scaler: Quotient | Degree,
): ScaledVector<T & Irrational> =>
    ({
        ...scaledVector,
        scaler: isUndefined(scaledVector.scaler)
            ? scaler
            : computeQuotientProduct(scaledVector.scaler, scaler),
    }) as ScaledVector<T & Irrational>

const maxScaledVector = (...scaledVectors: Array<ScaledVector>): Max<ScaledVector> => {
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

    return scaledVectors[maxIndex as unknown as number] as Max<ScaledVector>
}

const multiplyScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    multiplier: Multiplier,
): ScaledVector<T> => {
    return {
        ...scaledVector,
        vector: scaledVector.vector.map((primeCount: PrimeCount<T & Rational>): PrimeCount<T & Rational> => {
            return multiply(primeCount, multiplier as number) as PrimeCount<T & Rational>
        }),
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
