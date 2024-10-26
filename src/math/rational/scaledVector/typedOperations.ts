import {
    addVectors,
    NumericProperties,
    Quotient,
    ScaledVector,
    subtractVectors,
    sumVectors,
} from "../../numeric"
import { Mean, MeanType } from "../../types"
import { computeRationalVectorFromRationalScaledVector } from "../vector"

const addRationalScaledVectors = <T extends NumericProperties>(
    augendScaledVector: ScaledVector<T & { rational: true }>,
    addendScaledVector: ScaledVector<T & { rational: true }>,
): ScaledVector<T & { direction: undefined; integer: false; rational: true }> =>
    ({
        vector: addVectors(augendScaledVector.vector, addendScaledVector.vector),
    } as ScaledVector<T & { direction: undefined; integer: false; rational: true }>)

const subtractRationalScaledVectors = <T extends NumericProperties>(
    minuendScaledVector: ScaledVector<T & { rational: true }>,
    subtrahendScaledVector: ScaledVector<T & { rational: true }>,
): ScaledVector<T & { direction: undefined; integer: false; rational: true }> =>
    ({
        vector: subtractVectors(minuendScaledVector.vector, subtrahendScaledVector.vector),
    } as ScaledVector<T & { direction: undefined; integer: false; rational: true }>)

const computeRationalScaledVectorGeometricMean = (
    ...rationalScaledVectors: Array<ScaledVector<{ rational: true }>>
): Mean<{
    of: ScaledVector<{ rational: false }>
    meanType: MeanType.GEOMETRIC
}> => {
    return {
        vector: sumVectors(
            ...rationalScaledVectors.map(computeRationalVectorFromRationalScaledVector),
        ),
        scaler: [1, rationalScaledVectors.length] as Quotient,
    } as Mean<{
        of: ScaledVector<{ rational: false }>
        meanType: MeanType.GEOMETRIC
    }>
}

const sumRationalScaledVectors = <T extends NumericProperties>(
    ...rationalScaledVectors: Array<ScaledVector<T & { rational: true }>>
): ScaledVector<T & { direction: undefined; integer: false; rational: true }> =>
    ({
        vector: sumVectors(
            ...rationalScaledVectors.map(computeRationalVectorFromRationalScaledVector),
        ),
    } as ScaledVector<T & { direction: undefined; integer: false; rational: true }>)

export {
    subtractRationalScaledVectors,
    addRationalScaledVectors,
    computeRationalScaledVectorGeometricMean,
    sumRationalScaledVectors,
}
