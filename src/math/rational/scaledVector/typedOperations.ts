import {
    addVectors,
    UnknownDirection,
    Quotient,
    ScaledVector,
    subtractVectors,
    sumVectors,
    Noninteger,
    Rational,
    Irrational,
} from "../../numeric"
import { Mean, MeanType } from "../../types"
import { computeRationalVectorFromRationalScaledVector } from "../vector"

const addRationalScaledVectors = <T extends Rational>(
    augendScaledVector: ScaledVector<T>,
    addendScaledVector: ScaledVector<T>,
): ScaledVector<T & Noninteger & UnknownDirection> =>
    ({
        vector: addVectors(augendScaledVector.vector, addendScaledVector.vector),
    }) as ScaledVector<T & Noninteger & UnknownDirection>

const subtractRationalScaledVectors = <T extends Rational>(
    minuendScaledVector: ScaledVector<T>,
    subtrahendScaledVector: ScaledVector<T>,
): ScaledVector<T & Noninteger & UnknownDirection> =>
    ({
        vector: subtractVectors(minuendScaledVector.vector, subtrahendScaledVector.vector),
    }) as ScaledVector<T & Noninteger & UnknownDirection>

const computeRationalScaledVectorGeometricMean = <T extends Rational>(
    ...rationalScaledVectors: ScaledVector<T>[]
): ScaledVector<T & Irrational> &
    Mean<{
        of: ScaledVector<T>
        meanType: MeanType.GEOMETRIC
    }> => {
    return {
        vector: sumVectors(...rationalScaledVectors.map(computeRationalVectorFromRationalScaledVector)),
        scaler: [1, rationalScaledVectors.length] as Quotient,
    } as ScaledVector<T & Irrational> &
        Mean<{
            of: ScaledVector<T>
            meanType: MeanType.GEOMETRIC
        }>
}

const sumRationalScaledVectors = <T extends Rational>(
    ...rationalScaledVectors: ScaledVector<T>[]
): ScaledVector<T & Noninteger & UnknownDirection> =>
    ({
        vector: sumVectors(...rationalScaledVectors.map(computeRationalVectorFromRationalScaledVector)),
    }) as ScaledVector<T & Noninteger & UnknownDirection>

export {
    subtractRationalScaledVectors,
    addRationalScaledVectors,
    computeRationalScaledVectorGeometricMean,
    sumRationalScaledVectors,
}
