import {deepClone, shallowClone} from "../code"
import {Count} from "../types"
import {Decimal} from "./numeric"
import {count} from "./typedOperations"
import {Combination, Combinations} from "./types"

const computeCombinations = <T>(
    array: T[],
    comboCount: Count<T>,
    {withRepeatedElements = false}: {withRepeatedElements?: boolean} = {},
): Combinations<T> => {
    if (withRepeatedElements) {
        return computeCombinationsWithRepetitions(array, comboCount)
    }

    const combinations: number[][] = []

    if (comboCount === 0) {
        return [] as unknown[] as Combinations<T>
    }

    const computeRecursiveCombinations = (integerDecimal: Decimal<{integer: true}>, combination: number[]): void => {
        if (combination.length === comboCount) {
            combinations.push(shallowClone(combination))

            return
        }

        if (combination.length + array.length - integerDecimal + 1 < comboCount) {
            return
        }

        computeRecursiveCombinations(integerDecimal + 1 as Decimal<{integer: true}>, combination)
        combination.push(integerDecimal)
        computeRecursiveCombinations(integerDecimal + 1 as Decimal<{integer: true}>, combination)
        combination.pop()
    }

    computeRecursiveCombinations(1 as Decimal<{integer: true}>, [])

    return combinations.map((combination: number[]): Combination<T> => {
        return combination.map((index: number): T => {
            return array[index - 1] as T
        }) as Combination<T>
    }) as Combinations<T>
}

const computeCombinationsWithRepetitions = <T>(array: T[], comboCount: Count<T>): Combinations<T> => {
    if (comboCount === void 0) {
        comboCount = count(array)
    }
    const data = Array(comboCount) as Combination<T>
    const results = [] as unknown[] as Combinations<T>
    const computeCombinationsWithRepetitionsRecursively = (position: number, start: number): void => {
        if (position === comboCount) {
            results.push(shallowClone(data) as Combination<T>)
            return
        }
        for (let index = start; index < array.length; ++index) {
            data[position] = deepClone(array[index])
            computeCombinationsWithRepetitionsRecursively(position + 1, index)
        }
    }
    computeCombinationsWithRepetitionsRecursively(0, 0)

    return results as Combinations<T>
}

export {
    computeCombinations,
    computeCombinationsWithRepetitions,
}
