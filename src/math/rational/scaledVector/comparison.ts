import { MAX_JS_PRECISION, Precision } from "../../../code"
import { areVectorsEqual, NumericProperties, ScaledVector } from "../../numeric"
import { computeRationalDecimalFromRationalScaledVector } from "../decimal"
import { Rational } from "../types"

const areRationalScaledVectorsEqual = <
    T extends NumericProperties & Rational = Rational,
    U extends NumericProperties & Rational = Rational,
>(
    rationalScaledVectorA: ScaledVector<T>,
    rationalScaledVectorB: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean => areVectorsEqual(rationalScaledVectorA.vector, rationalScaledVectorB.vector, precision)

const isRationalScaledVectorGreater = <
    T extends NumericProperties & Rational = Rational,
    U extends NumericProperties & Rational = Rational,
>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) &&
    computeRationalDecimalFromRationalScaledVector(rationalScaledVector) >
        computeRationalDecimalFromRationalScaledVector(otherRationalScaledVector)

const isRationalScaledVectorLesser = <
    T extends NumericProperties & Rational = Rational,
    U extends NumericProperties & Rational = Rational,
>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) &&
    computeRationalDecimalFromRationalScaledVector(rationalScaledVector) <
        computeRationalDecimalFromRationalScaledVector(otherRationalScaledVector)

const isRationalScaledVectorGreaterOrEqual = <
    T extends NumericProperties & Rational = Rational,
    U extends NumericProperties & Rational = Rational,
>(
    rationalScaledVector: ScaledVector<T>,
    otherRationalScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision) ||
    isRationalScaledVectorGreater(rationalScaledVector, otherRationalScaledVector)

const isRationalScaledVectorLesserOrEqual = <
    T extends NumericProperties & Rational = Rational,
    U extends NumericProperties & Rational = Rational,
>(
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
