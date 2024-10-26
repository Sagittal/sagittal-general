import {MAX_JS_PRECISION, Precision} from "../../../code"
import {areVectorsEqual, NumericProperties, ScaledVector} from "../../numeric"
import {computeRationalDecimalFromRationalScaledVector} from "../decimal"

const areRationalScaledVectorsEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalScaledVectorA: ScaledVector<T & {rational: true}>,
    rationalScaledVectorB: ScaledVector<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areVectorsEqual(rationalScaledVectorA.vector, rationalScaledVectorB.vector, precision)

const isRationalScaledVectorGreater = <T extends NumericProperties, U extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & {rational: true}>,
    otherRationalScaledVector: ScaledVector<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision)
    && computeRationalDecimalFromRationalScaledVector(rationalScaledVector) >
    computeRationalDecimalFromRationalScaledVector(otherRationalScaledVector)

const isRationalScaledVectorLesser = <T extends NumericProperties, U extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & {rational: true}>,
    otherRationalScaledVector: ScaledVector<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision)
    && computeRationalDecimalFromRationalScaledVector(rationalScaledVector) <
    computeRationalDecimalFromRationalScaledVector(otherRationalScaledVector)

const isRationalScaledVectorGreaterOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & {rational: true}>,
    otherRationalScaledVector: ScaledVector<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision)
    || isRationalScaledVectorGreater(rationalScaledVector, otherRationalScaledVector)

const isRationalScaledVectorLesserOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalScaledVector: ScaledVector<T & {rational: true}>,
    otherRationalScaledVector: ScaledVector<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScaledVectorsEqual(rationalScaledVector, otherRationalScaledVector, precision)
    || isRationalScaledVectorLesser(rationalScaledVector, otherRationalScaledVector)

export {
    areRationalScaledVectorsEqual,
    isRationalScaledVectorGreater,
    isRationalScaledVectorLesser,
    isRationalScaledVectorGreaterOrEqual,
    isRationalScaledVectorLesserOrEqual,
}
