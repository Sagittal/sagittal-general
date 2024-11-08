import { MAX_JS_PRECISION, Precision } from "../../../code"
import { areVectorsEqual, Rational, ScaledVector } from "../../numeric"
import { computeRationalDecimalFromRationalScaledVector } from "../decimal"

const areRationalScaledVectorsEqual = <T extends Rational = Rational, U extends Rational = Rational>(
    rationalScaledVectorA: ScaledVector<T>,
    rationalScaledVectorB: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean => areVectorsEqual(rationalScaledVectorA.vector, rationalScaledVectorB.vector, precision)

const isRationalScaledVectorGreater = <T extends Rational = Rational, U extends Rational = Rational>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) &&
    computeRationalDecimalFromRationalScaledVector(rationalScaledVector) >
        computeRationalDecimalFromRationalScaledVector(otherRationalScaledVector)

const isRationalScaledVectorLesser = <T extends Rational = Rational, U extends Rational = Rational>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) &&
    computeRationalDecimalFromRationalScaledVector(rationalScaledVector) <
        computeRationalDecimalFromRationalScaledVector(otherRationalScaledVector)

const isRationalScaledVectorGreaterOrEqual = <T extends Rational = Rational, U extends Rational = Rational>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) ||
    isRationalScaledVectorGreater(rationalScaledVector, otherRationalScaledVector)

const isRationalScaledVectorLesserOrEqual = <T extends Rational = Rational, U extends Rational = Rational>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) ||
    isRationalScaledVectorLesser(rationalScaledVector, otherRationalScaledVector)

export {
    areRationalScaledVectorsEqual,
    isRationalScaledVectorGreater,
    isRationalScaledVectorLesser,
    isRationalScaledVectorGreaterOrEqual,
    isRationalScaledVectorLesserOrEqual,
}
