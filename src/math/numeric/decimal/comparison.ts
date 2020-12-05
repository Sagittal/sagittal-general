import {isCloseTo, isUndefined, MAX_JS_PRECISION, Precision} from "../../../code"
import {NumericProperties} from "../types"
import {Decimal} from "./types"

const areDecimalsEqual = <T extends NumericProperties, U extends NumericProperties>(
    decimalA: Decimal<T>,
    decimalB: Decimal<U>,
    precision?: Precision,
): boolean =>
    isUndefined(precision) ?
        decimalA as Decimal === decimalB as Decimal :
        isCloseTo(decimalA, decimalB, precision)

const isDecimalHigher = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areDecimalsEqual(decimal, otherDecimal, precision) && decimal > otherDecimal

const isDecimalLower = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !areDecimalsEqual(decimal, otherDecimal, precision) && decimal < otherDecimal

const isDecimalHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areDecimalsEqual(decimal, otherDecimal, precision) || decimal > otherDecimal

const isDecimalLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areDecimalsEqual(decimal, otherDecimal, precision) || decimal < otherDecimal

export {
    areDecimalsEqual,
    isDecimalHigher,
    isDecimalLower,
    isDecimalHigherOrEqual,
    isDecimalLowerOrEqual,
}
