import {isUndefined, MAX_JS_PRECISION, Precision} from "../../../code"
import {areDecimalsEqual, areVectorsEqual, areQuotientsEqual, NumericProperties} from "../../../math"
import {computeIrrationalDecimalFromScaledVector} from "../../irrational"
import {ScaledVector} from "./types"

const areScaledVectorsEqual = <T extends NumericProperties, U extends NumericProperties>(
    scaledVectorA: ScaledVector<T>,
    scaledVectorB: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean => (
        areVectorsEqual(scaledVectorA.vector, scaledVectorB.vector, precision)
        && (
            isUndefined(scaledVectorA.scaler) && isUndefined(scaledVectorB.scaler)
            || (
                !isUndefined(scaledVectorA.scaler) && !isUndefined(scaledVectorB.scaler)
                && areQuotientsEqual(scaledVectorA.scaler, scaledVectorB.scaler, precision)
            )
        )
    )
    || areDecimalsEqual(
        computeIrrationalDecimalFromScaledVector(scaledVectorA),
        computeIrrationalDecimalFromScaledVector(scaledVectorB),
        precision,
    )

const isScaledVectorGreater = <T extends NumericProperties, U extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    otherScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areScaledVectorsEqual(scaledVector, otherScaledVector, precision)
        && computeIrrationalDecimalFromScaledVector(scaledVector) > computeIrrationalDecimalFromScaledVector(otherScaledVector)
    )

const isScaledVectorLesser = <T extends NumericProperties, U extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    otherScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areScaledVectorsEqual(scaledVector, otherScaledVector, precision)
        && computeIrrationalDecimalFromScaledVector(scaledVector) < computeIrrationalDecimalFromScaledVector(otherScaledVector)
    )

const isScaledVectorGreaterOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    otherScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areScaledVectorsEqual(scaledVector, otherScaledVector, precision) || isScaledVectorGreater(scaledVector, otherScaledVector, precision)

const isScaledVectorLesserOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    scaledVector: ScaledVector<T>,
    otherScaledVector: ScaledVector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areScaledVectorsEqual(scaledVector, otherScaledVector, precision) || isScaledVectorLesser(scaledVector, otherScaledVector, precision)

export {
    areScaledVectorsEqual,
    isScaledVectorGreater,
    isScaledVectorLesser,
    isScaledVectorGreaterOrEqual,
    isScaledVectorLesserOrEqual,
}
