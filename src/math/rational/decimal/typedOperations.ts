import {Decimal, NumericProperties} from "../../numeric"
import {divide} from "../../typedOperations"

const integerDivide = (dividend: Decimal, divisor: Decimal): Decimal<{integer: true}> =>
    floor(divide(dividend, divisor)) as Decimal<{integer: true}>

const floor = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & {integer: true}> =>
    Math.floor(decimal) as Decimal<T & {integer: true}>

const ceil = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & {integer: true}> =>
    Math.ceil(decimal) as Decimal<T & {integer: true}>

export {
    integerDivide,
    floor,
    ceil,
}
