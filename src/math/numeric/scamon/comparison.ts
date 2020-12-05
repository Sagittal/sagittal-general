import {isUndefined, MAX_JS_PRECISION, Precision} from "../../../code"
import {areDecimalsEqual, areMonzosEqual, areQuotientsEqual, NumericProperties} from "../../../math"
import {computeIrrationalDecimalFromScamon} from "../../irrational"
import {Scamon} from "./types"

const areScamonsEqual = <T extends NumericProperties, U extends NumericProperties>(
    scamonA: Scamon<T>,
    scamonB: Scamon<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean => (
        areMonzosEqual(scamonA.monzo, scamonB.monzo, precision)
        && (
            isUndefined(scamonA.scaler) && isUndefined(scamonB.scaler)
            || (
                !isUndefined(scamonA.scaler) && !isUndefined(scamonB.scaler)
                && areQuotientsEqual(scamonA.scaler, scamonB.scaler, precision)
            )
        )
    )
    || areDecimalsEqual(
        computeIrrationalDecimalFromScamon(scamonA),
        computeIrrationalDecimalFromScamon(scamonB),
        precision,
    )

const isScamonGreater = <T extends NumericProperties, U extends NumericProperties>(
    scamon: Scamon<T>,
    otherScamon: Scamon<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areScamonsEqual(scamon, otherScamon, precision)
        && computeIrrationalDecimalFromScamon(scamon) > computeIrrationalDecimalFromScamon(otherScamon)
    )

const isScamonLesser = <T extends NumericProperties, U extends NumericProperties>(
    scamon: Scamon<T>,
    otherScamon: Scamon<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areScamonsEqual(scamon, otherScamon, precision)
        && computeIrrationalDecimalFromScamon(scamon) < computeIrrationalDecimalFromScamon(otherScamon)
    )

const isScamonGreaterOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    scamon: Scamon<T>,
    otherScamon: Scamon<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areScamonsEqual(scamon, otherScamon, precision) || isScamonGreater(scamon, otherScamon, precision)

const isScamonLesserOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    scamon: Scamon<T>,
    otherScamon: Scamon<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areScamonsEqual(scamon, otherScamon, precision) || isScamonLesser(scamon, otherScamon, precision)

export {
    areScamonsEqual,
    isScamonGreater,
    isScamonLesser,
    isScamonGreaterOrEqual,
    isScamonLesserOrEqual,
}
