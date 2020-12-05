import {Index} from "../types"

const indexOfFinalElement = <T>(array: T[]): Index<T> =>
    array.length - 1 as Index<T>

const finalElement = <T>(array: T[]): T =>
    array[indexOfFinalElement(array)]

export {
    indexOfFinalElement,
    finalElement,
}
