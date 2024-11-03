import { Irrational, Noninteger } from "../../irrational"
import {
    addVectors,
    NumericProperties,
    Quotient,
    ScaledVector,
    subtractVectors,
    sumVectors,
} from "../../numeric"
import { Mean, MeanType } from "../../types"
import { Rational } from "../types"
import { computeRationalVectorFromRationalScaledVector } from "../vector"

const addRationalScaledVectors = <T extends NumericProperties>(
    augendScaledVector: ScaledVector<T & Rational>,
    addendScaledVector: ScaledVector<T & Rational>,
): ScaledVector<T & Rational & Noninteger & { direction: undefined }> =>
    ({
        vector: addVectors(augendScaledVector.vector, addendScaledVector.vector),
    }) as ScaledVector<T & Rational & Noninteger & { direction: undefined }>

const subtractRationalScaledVectors = <T extends NumericProperties>(
    minuendScaledVector: ScaledVector<T & Rational>,
    subtrahendScaledVector: ScaledVector<T & Rational>,
): ScaledVector<T & Rational & Noninteger & { direction: undefined }> =>
    ({
        vector: subtractVectors(minuendScaledVector.vector, subtrahendScaledVector.vector),
    }) as ScaledVector<T & Rational & Noninteger & { direction: undefined }>

const computeRationalScaledVectorGeometricMean = (
    ...rationalScaledVectors: Array<ScaledVector>
): Mean<{
    of: ScaledVector<Irrational>
    meanType: MeanType.GEOMETRIC
}> => {
    return {
        vector: sumVectors(...rationalScaledVectors.map(computeRationalVectorFromRationalScaledVector)),
        scaler: [1, rationalScaledVectors.length] as Quotient,
    } as Mean<{
        of: ScaledVector<Irrational>
        meanType: MeanType.GEOMETRIC
    }>
}

const sumRationalScaledVectors = <T extends NumericProperties>(
    ...rationalScaledVectors: Array<ScaledVector<T & Rational>>
): ScaledVector<T & Rational & Noninteger & { direction: undefined }> =>
    ({
        vector: sumVectors(...rationalScaledVectors.map(computeRationalVectorFromRationalScaledVector)),
    }) as ScaledVector<T & Rational & Noninteger & { direction: undefined }>

export {
    subtractRationalScaledVectors,
    addRationalScaledVectors,
    computeRationalScaledVectorGeometricMean,
    sumRationalScaledVectors,
}
