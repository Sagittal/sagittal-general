import {deepEquals} from "./deepEquals"

const allElementsEqual = (array: unknown[]): boolean =>
    array.every((element: unknown): boolean =>
        deepEquals(element, array[0]),
    )

export {
    allElementsEqual,
}
