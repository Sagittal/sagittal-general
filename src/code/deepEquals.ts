import {isCloseTo} from "./isCloseTo"
import {isArray, isNumber, isObject, isUndefined} from "./typeGuards"
import {Precision} from "./types"

const deepEqualsArray = <T>(valueA: T[], valueB: T[], precision?: Precision): boolean =>
    isArray(valueA) &&
    valueA.length === valueB.length &&
    valueB.every((el: T, index: number): boolean => deepEquals(el, valueA[index], precision))

const deepEqualsObject = <T extends Record<string, unknown>>(
    valueA: T,
    valueB: T,
    precision?: Precision,
): boolean => {
    let equal

    if (isArray(valueA)) {
        equal = false
    } else if (isObject(valueA)) {
        equal = Object.keys(valueA).length === Object.keys(valueB).length &&
            Object.entries(valueB)
                .every(([key, value]: [string, unknown]): boolean =>
                    deepEquals(value, valueA[key], precision))
    } else {
        equal = false
    }

    return equal
}

const deepEquals = <T>(valueA: T, valueB: T, precision?: Precision): boolean => {
    let equal = false

    if (valueA === valueB) {
        equal = true
    } else if (!isUndefined(precision) && isNumber(valueA) && isNumber(valueB)) {
        equal = isCloseTo(valueA, valueB, precision)
    } else if (isArray(valueA)) {
        equal = deepEqualsArray(valueB as T & unknown[], valueA as T & unknown[], precision)
    } else if (isObject(valueA)) {
        equal = deepEqualsObject(
            valueB as T & Record<string, unknown>,
            valueA as T & {[index: string]: unknown},
            precision,
        )
    }

    return equal
}

export {
    deepEquals,
}
