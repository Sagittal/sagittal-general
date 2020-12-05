import {isUndefined, MAX_JS_INTEGER_VALUE, Precision} from "../code"
import {Count} from "../types"
import {
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
} from "./constants"
import {Decimal} from "./numeric"
import {
    Abs,
    Addend,
    Augend,
    Base,
    Dividend,
    Divisor,
    Exponent,
    Max,
    Min,
    Minuend,
    Multiplicand,
    Multiplier,
    Power,
    Product,
    Subtrahend,
    Sum,
} from "./types"

const count = <T>(array: T[]): Count<T> => {
    return array.length as Count<T>
}

const sum = <T extends number>(...addends: T[]): Sum<T> =>
    addends.reduce(
        (total: Sum<T>, addend: T): Sum<T> => total + addend as Sum<T>,
        ADDITIVE_IDENTITY as Sum<T>,
    )

const product = <T extends number>(...factors: T[]): Product<T> =>
    factors.reduce(
        (total: Product<T>, factor: T): Product<T> => total * factor as Product<T>,
        MULTIPLICATIVE_IDENTITY as Product<T>,
    )

const add = <T extends number>(augend: Augend<T> | T, addend: Addend<T> | T): T =>
    augend + addend as T                    // Sum

const subtract = <T extends number>(minuend: Minuend<T> | T, subtrahend: Subtrahend<T> | T): T =>
    minuend - subtrahend as T               // Difference

const multiply = <T extends number>(multiplicand: Multiplicand<T> | T, multiplier: Multiplier<T> | T): T => {
    return multiplicand * multiplier as T   // Product
}

const divide = <T extends number>(dividend: Dividend<T> | T, divisor: Divisor<T> | T): T => {
    return dividend / divisor as T          // Quotient
}

const negative = <T extends number>(number: T): T =>
    number === 0 ? 0 as T : -number as T

const round = <T extends number>(number: T, precision?: Precision): T => {
    if (isUndefined(precision)) {
        return Math.round(number) as T & Decimal<{integer: true}>
    }

    if (abs(number) > MAX_JS_INTEGER_VALUE) {
        return number
    }

    if (abs(number) < VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS) {
        return 0 as T
    }

    return +(Math.round(`${String(number)}e+${String(precision)}` as unknown as number) + "e-" + String(precision)) as T
}

const abs = <T extends number>(number: T): Abs<T> =>
    Math.abs(number) as Abs<T>

const max = <T extends number>(...numbers: T[]): Max<T> =>
    Math.max(...numbers) as Max<T>

const min = <T extends number>(...numbers: T[]): Min<T> =>
    Math.min(...numbers) as Min<T>

const pow = <T extends number>(base: Base<T> | T, exponent: Exponent<T> | T): Power<T> =>
    Math.pow(base, exponent) as Power<T>

const log = <T extends number>(power: Power<T> | T, base: Base<T> | T = Math.E as Base<T>): Exponent<T> =>
    Math.log(power) / Math.log(base) as Exponent<T>

export {
    sum,
    product,
    add,
    subtract,
    multiply,
    divide,
    negative,
    round,
    abs,
    max,
    min,
    pow,
    log,
    count,
}
