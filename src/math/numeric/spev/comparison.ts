import {isUndefined, MAX_JS_PRECISION, Precision} from "../../../code"
import {areDecimalsEqual, arePevsEqual, areQuotientsEqual, NumericProperties} from "../../../math"
import {computeIrrationalDecimalFromSpev} from "../../irrational"
import {Spev} from "./types"

const areSpevsEqual = <T extends NumericProperties, U extends NumericProperties>(
    spevA: Spev<T>,
    spevB: Spev<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean => (
        arePevsEqual(spevA.pev, spevB.pev, precision)
        && (
            isUndefined(spevA.scaler) && isUndefined(spevB.scaler)
            || (
                !isUndefined(spevA.scaler) && !isUndefined(spevB.scaler)
                && areQuotientsEqual(spevA.scaler, spevB.scaler, precision)
            )
        )
    )
    || areDecimalsEqual(
        computeIrrationalDecimalFromSpev(spevA),
        computeIrrationalDecimalFromSpev(spevB),
        precision,
    )

const isSpevGreater = <T extends NumericProperties, U extends NumericProperties>(
    spev: Spev<T>,
    otherSpev: Spev<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areSpevsEqual(spev, otherSpev, precision)
        && computeIrrationalDecimalFromSpev(spev) > computeIrrationalDecimalFromSpev(otherSpev)
    )

const isSpevLesser = <T extends NumericProperties, U extends NumericProperties>(
    spev: Spev<T>,
    otherSpev: Spev<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areSpevsEqual(spev, otherSpev, precision)
        && computeIrrationalDecimalFromSpev(spev) < computeIrrationalDecimalFromSpev(otherSpev)
    )

const isSpevGreaterOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    spev: Spev<T>,
    otherSpev: Spev<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areSpevsEqual(spev, otherSpev, precision) || isSpevGreater(spev, otherSpev, precision)

const isSpevLesserOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    spev: Spev<T>,
    otherSpev: Spev<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areSpevsEqual(spev, otherSpev, precision) || isSpevLesser(spev, otherSpev, precision)

export {
    areSpevsEqual,
    isSpevGreater,
    isSpevLesser,
    isSpevGreaterOrEqual,
    isSpevLesserOrEqual,
}
