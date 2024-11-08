import { Decimal, Integer, NumericProperties } from "../../numeric"
import { divide } from "../../typedOperations"

const integerDivide = <T extends NumericProperties, U extends NumericProperties>(
    dividend: Decimal<T>,
    divisor: Decimal<U>,
): Decimal<Integer> => floor(divide<Decimal<T | U>>(dividend, divisor))

const floor = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Integer> =>
    Math.floor(decimal) as Decimal<T & Integer>

const ceil = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Integer> =>
    Math.ceil(decimal) as Decimal<T & Integer>

export { integerDivide, floor, ceil }
