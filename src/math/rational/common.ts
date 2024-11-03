import { allElementsEqual, isEmpty, isSingleton } from "../../code"
import { Decimal, mod } from "../numeric"
import { abs, divide } from "../typedOperations"
import { Divisor } from "../types"
import { ONE } from "./constants"
import { CommonFunction, Integer } from "./types"

const computeLowestCommonMultipleOfTwoIntegerDecimals = (
    integerDecimalA: Decimal<Integer>,
    integerDecimalB: Decimal<Integer>,
): Decimal<Integer> =>
    abs(
        divide(
            integerDecimalA * integerDecimalB,
            computeGreatestCommonDivisor(integerDecimalA, integerDecimalB),
        ),
    ) as Decimal<Integer>

const computeGreatestCommonDivisorOfTwoIntegerDecimals = (
    integerDecimalA: Decimal<Integer>,
    integerDecimalB: Decimal<Integer>,
): Decimal<Integer> => {
    let output: Decimal<Integer> = integerDecimalA
    let remainder: Decimal<Integer> = integerDecimalB
    while (remainder) {
        const previousRemainder: Decimal<Integer> = remainder
        remainder = mod(output, remainder)
        output = previousRemainder
    }

    return output
}

const recurseCommon = (
    commonFunction: CommonFunction,
    ...integerDecimals: Array<Decimal<Integer>>
): Decimal<Integer> => {
    if (isSingleton(integerDecimals)) {
        return integerDecimals[0]
    }
    if (isEmpty(integerDecimals)) {
        return ONE
    }

    const result: Decimal<Integer> = commonFunction(integerDecimals[0], integerDecimals[1])
    if (integerDecimals.length === 2) {
        return result
    }

    return recurseCommon(commonFunction, result, ...integerDecimals.slice(2))
}

const computeCommon = (
    integerDecimals: Array<Decimal<Integer>>,
    commonFunction: CommonFunction,
): Decimal<Integer> => {
    if (isEmpty(integerDecimals)) {
        return ONE
    }

    if (allElementsEqual(integerDecimals)) {
        return integerDecimals[0]
    }

    return recurseCommon(commonFunction, ...integerDecimals)
}

const computeLeastCommonMultiple = (...integerDecimals: Array<Decimal<Integer>>): Decimal<Integer> =>
    computeCommon(integerDecimals, computeLowestCommonMultipleOfTwoIntegerDecimals)

const computeGreatestCommonDivisor = <T extends Decimal<Integer>>(...integerDecimals: T[]): Divisor<T> =>
    computeCommon(integerDecimals, computeGreatestCommonDivisorOfTwoIntegerDecimals) as Divisor<T>

export { computeLeastCommonMultiple, computeGreatestCommonDivisor }
