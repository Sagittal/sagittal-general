import { Decimal, NumericProperties } from "../../numeric"
import { divide } from "../../typedOperations"
import { Integer } from "../types"

const integerDivide = (dividend: Decimal, divisor: Decimal): Decimal<Integer> =>
    floor(divide(dividend, divisor))

const floor = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Integer> =>
    Math.floor(decimal) as Decimal<T & Integer>

const ceil = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Integer> =>
    Math.ceil(decimal) as Decimal<T & Integer>

export { integerDivide, floor, ceil }
