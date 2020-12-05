import {MAX_JS_PRECISION, Precision} from "../../../code"
import {areMonzosEqual, NumericProperties, Scamon} from "../../numeric"
import {computeRationalDecimalFromRationalScamon} from "../decimal"

const areRationalScamonsEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalScamonA: Scamon<T & {rational: true}>,
    rationalScamonB: Scamon<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areMonzosEqual(rationalScamonA.monzo, rationalScamonB.monzo, precision)

const isRationalScamonGreater = <T extends NumericProperties, U extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
    otherRationalScamon: Scamon<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
    && computeRationalDecimalFromRationalScamon(rationalScamon) >
    computeRationalDecimalFromRationalScamon(otherRationalScamon)

const isRationalScamonLesser = <T extends NumericProperties, U extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
    otherRationalScamon: Scamon<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
    && computeRationalDecimalFromRationalScamon(rationalScamon) <
    computeRationalDecimalFromRationalScamon(otherRationalScamon)

const isRationalScamonGreaterOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
    otherRationalScamon: Scamon<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
    || isRationalScamonGreater(rationalScamon, otherRationalScamon)

const isRationalScamonLesserOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    rationalScamon: Scamon<T & {rational: true}>,
    otherRationalScamon: Scamon<U & {rational: true}>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
    || isRationalScamonLesser(rationalScamon, otherRationalScamon)

export {
    areRationalScamonsEqual,
    isRationalScamonGreater,
    isRationalScamonLesser,
    isRationalScamonGreaterOrEqual,
    isRationalScamonLesserOrEqual,
}
