import {finalElement} from "./finalElement"
import {isNumber, isObject, isString} from "./typeGuards"
import {KeyPath} from "./types"

const computeKeyPath = (...path: Array<number | string>): KeyPath => {
    if (path.length === 1) {
        return path[0] as KeyPath
    }
    if (path.length === 2) {
        return {[path[0]]: path[1]} as KeyPath
    }

    const keyPath = {} as KeyPath
    let cursor = keyPath
    const pathUpToLastTwoSteps = path.slice(0, path.length - 2)
    pathUpToLastTwoSteps.forEach((step: number | string): void => {
        (cursor as {[index: string]: number | string | KeyPath})[step] = {} as KeyPath
        cursor = (cursor as {[index: string]: number | string | KeyPath})[step] as KeyPath
    })
    const penultimateStep = path[path.length - 2];
    (cursor as {[index: string]: number | string | KeyPath})[penultimateStep] = finalElement(path)

    return keyPath
}

const computeKeyPathArray = (keyPath: KeyPath): Array<string | number> => {
    if (isNumber(keyPath) || isString(keyPath)) return [keyPath]

    const keyPathArray = []
    let cursor = keyPath as KeyPath
    while (isObject(cursor)) {
        let key: number | string = Object.keys(cursor)[0]
        const maybeIndex = parseInt(key)
        if (!isNaN(maybeIndex)) key = maybeIndex
        keyPathArray.push(key)
        cursor = (cursor as {[index: string]: number | string | KeyPath})[key] as KeyPath
    }
    keyPathArray.push(cursor)

    return keyPathArray
}

export {
    computeKeyPath,
    computeKeyPathArray,
}
