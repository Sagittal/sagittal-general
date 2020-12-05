import {stringify} from "../io"
import {DEFAULT_PRECISION} from "./constants"
import {increment} from "./crement"
import {dig} from "./dig"
import {computeExampleElement} from "./exampleElement"
import {isCloseTo} from "./isCloseTo"
import {isArray, isNumber, isUndefined} from "./typeGuards"
import {KeyPath, Precision, Sortable, SortByResultOptions, SortOptions, SortResult, SortResultOptions} from "./types"

const isNotClose = (a: number | string, b: number | string, precision: Precision = DEFAULT_PRECISION): boolean => {
    return isNumber(a) && isNumber(b) ?
        !isCloseTo(a, b, precision)
        : true
}

const checkPath = (array: unknown[], keyPath: KeyPath): void => {
    const exampleElement = computeExampleElement(array)
    try {
        dig(exampleElement as unknown as Sortable, keyPath, {strict: true})
    } catch (e) {
        throw new Error(`"Attempted to sort array by ${stringify(keyPath)}, however its elements do not have this property. Example element: ${stringify(exampleElement)}`)
    }
}

const computeSortByResult = (element: Sortable, nextElement: Sortable, options: SortByResultOptions): SortResult => {
    const {keyPath, precision, descending} = options

    const nextSorter = dig(nextElement, keyPath) as number | string
    const sorter = dig(element, keyPath) as number | string

    return computeSortResult(sorter, nextSorter, {precision, descending})
}

const computeSortResult = (
    element: number | string,
    nextElement: number | string,
    {precision, descending}: SortResultOptions,
): SortResult => {
    const notClose = isNotClose(element, nextElement, precision)

    return descending ?
        nextElement > element && notClose ? 1 :
            nextElement < element && notClose ? -1 : 0 :
        element > nextElement && notClose ? 1 :
            element < nextElement && notClose ? -1 : 0
}

const sort = <T>(array: T[], {by, descending, precision}: SortOptions = {}): T[] => {
    if (array.length === 0) return array

    if (!isUndefined(by)) {
        if (isArray(by)) {
            by.forEach((keyPath: KeyPath): void => checkPath(array, keyPath));

            (array as unknown[] as Sortable[])
                .sort((element: Sortable, nextElement: Sortable): SortResult => {
                    let sortResult = 0 as SortResult
                    let byIndex = -1
                    while (sortResult === 0 && byIndex < by.length) {
                        byIndex = increment(byIndex)
                        sortResult =
                            computeSortByResult(element, nextElement, {keyPath: by[byIndex], descending, precision})
                    }

                    return sortResult
                })
        } else {
            checkPath(array, by);

            (array as unknown[] as Sortable[])
                .sort((element: Sortable, nextElement: Sortable): SortResult => {
                    return computeSortByResult(element, nextElement, {keyPath: by, descending, precision})
                })
        }
    } else {
        (array as unknown[] as Array<number | string>)
            .sort((element: number | string, nextElement: number | string): SortResult => {
                return computeSortResult(element, nextElement, {precision, descending})
            })
    }

    return array
}

export {
    sort,
}
