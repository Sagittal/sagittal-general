import {allElementsEqual, isEmpty, isSingleton} from "../../code"
import {Decimal, mod} from "../numeric"
import {abs, divide} from "../typedOperations"
import {Divisor} from "../types"
import {ONE} from "./constants"
import {CommonFunction} from "./types"

const computeLowestCommonMultipleOfTwoIntegerDecimals = (
    integerDecimalA: Decimal<{integer: true}>,
    integerDecimalB: Decimal<{integer: true}>,
): Decimal<{integer: true}> =>
    abs(divide(
        integerDecimalA * integerDecimalB as Decimal<{integer: true}>,
        computeGreatestCommonDivisor(integerDecimalA, integerDecimalB),
    )) as Decimal<{integer: true}>

const computeGreatestCommonDivisorOfTwoIntegerDecimals = (
    integerDecimalA: Decimal<{integer: true}>,
    integerDecimalB: Decimal<{integer: true}>,
): Decimal<{integer: true}> => {
    let output: Decimal<{integer: true}> = integerDecimalA
    let remainder: Decimal<{integer: true}> = integerDecimalB
    while (remainder) {
        const previousRemainder: Decimal<{integer: true}> = remainder
        remainder = mod(output, remainder) as Decimal<{integer: true}>
        output = previousRemainder
    }

    return output
}

const recurseCommon = (
    commonFunction: CommonFunction,
    ...integerDecimals: Array<Decimal<{integer: true}>>
): Decimal<{integer: true}> => {
    if (isSingleton(integerDecimals)) {
        return integerDecimals[0]
    }
    if (isEmpty(integerDecimals)) {
        return ONE
    }

    const result: Decimal<{integer: true}> = commonFunction(integerDecimals[0], integerDecimals[1])
    if (integerDecimals.length === 2) {
        return result
    }

    return recurseCommon(commonFunction, result, ...integerDecimals.slice(2))
}

const computeCommon = (
    integerDecimals: Array<Decimal<{integer: true}>>,
    commonFunction: CommonFunction,
): Decimal<{integer: true}> => {
    if (isEmpty(integerDecimals)) {
        return ONE
    }

    if (allElementsEqual(integerDecimals)) {
        return integerDecimals[0]
    }

    return recurseCommon(commonFunction, ...integerDecimals)
}

const computeLeastCommonMultiple = (
    ...integerDecimals: Array<Decimal<{integer: true}>>
): Decimal<{integer: true}> =>
    computeCommon(integerDecimals, computeLowestCommonMultipleOfTwoIntegerDecimals)

const computeGreatestCommonDivisor = <T extends Decimal<{integer: true}>>(...integerDecimals: T[]): Divisor<T> =>
    computeCommon(integerDecimals, computeGreatestCommonDivisorOfTwoIntegerDecimals) as Divisor<T>

export {
    computeLeastCommonMultiple,
    computeGreatestCommonDivisor,
}
