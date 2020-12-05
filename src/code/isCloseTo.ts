import {abs, negative, round} from "../math"
import {DEFAULT_PRECISION} from "./constants"
import {isUndefined} from "./typeGuards"
import {Maybe, Precision} from "./types"

const isCloseTo = (
    actual: Maybe<number>,
    expected: Maybe<number>,
    precision: Precision = DEFAULT_PRECISION,
): boolean => {
    if (actual === Infinity && expected === Infinity) {
        return true
    }

    if (isUndefined(actual) && isUndefined(expected)) {
        return true
    }
    if (isUndefined(actual)) {
        return false
    }
    if (isUndefined(expected)) {
        return false
    }

    const pow: number = 10 ** (precision + 1)
    const delta = abs(actual - expected)
    const maxDelta: number = 10 ** negative(precision) / 2

    return round(delta * pow) / pow <= maxDelta
}

export {
    isCloseTo,
}
