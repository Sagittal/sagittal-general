import {MAX_JS_PRECISION, Precision} from "../../../code"
import {arePevsEqual, NumericProperties, Spev} from "../../numeric"
import {computeRationalDecimalFromRationalSpev} from "../decimal"

const areRationalSpevsEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalSpevA: Spev<T & {rational: true}>,
    rationalSpevB: Spev<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    arePevsEqual(rationalSpevA.pev, rationalSpevB.pev, precision)

const isRationalSpevGreater = <T extends NumericProperties, U extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
    otherRationalSpev: Spev<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalSpevsEqual(rationalSpev, otherRationalSpev, precision)
    && computeRationalDecimalFromRationalSpev(rationalSpev) >
    computeRationalDecimalFromRationalSpev(otherRationalSpev)

const isRationalSpevLesser = <T extends NumericProperties, U extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
    otherRationalSpev: Spev<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalSpevsEqual(rationalSpev, otherRationalSpev, precision)
    && computeRationalDecimalFromRationalSpev(rationalSpev) <
    computeRationalDecimalFromRationalSpev(otherRationalSpev)

const isRationalSpevGreaterOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
    otherRationalSpev: Spev<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalSpevsEqual(rationalSpev, otherRationalSpev, precision)
    || isRationalSpevGreater(rationalSpev, otherRationalSpev)

const isRationalSpevLesserOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalSpev: Spev<T & {rational: true}>,
    otherRationalSpev: Spev<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalSpevsEqual(rationalSpev, otherRationalSpev, precision)
    || isRationalSpevLesser(rationalSpev, otherRationalSpev)

export {
    areRationalSpevsEqual,
    isRationalSpevGreater,
    isRationalSpevLesser,
    isRationalSpevGreaterOrEqual,
    isRationalSpevLesserOrEqual,
}
