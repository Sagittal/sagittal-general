import {shallowClone} from "./clone"
import {finalElement} from "./finalElement"

const computeTrimmedArray = <T extends unknown[]>(array: T): T => {
    const trimmedArray = shallowClone(array)

    while (trimmedArray.length && !finalElement(trimmedArray)) {
        trimmedArray.pop()
    }

    return trimmedArray as T
}

export {
    computeTrimmedArray,
}
