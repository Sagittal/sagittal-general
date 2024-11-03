import { finalElement } from "./finalElement"
import { isNumber, isObject, isString } from "./typeGuards"
import { KeyPath, Key } from "./types"

const computeKeyPath = (...path: Array<Key>): KeyPath => {
    if (path.length === 1) {
        return path[0] as KeyPath
    }
    if (path.length === 2) {
        return { [path[0]]: path[1] } as KeyPath
    }

    const keyPath = {} as KeyPath
    let cursor = keyPath
    const pathUpToLastTwoSteps = path.slice(0, path.length - 2)
    pathUpToLastTwoSteps.forEach((step: Key): void => {
        ;(cursor as { [index: string]: Key | KeyPath })[step] = {} as KeyPath
        cursor = (cursor as { [index: string]: Key | KeyPath })[step] as KeyPath
    })
    const penultimateStep = path[path.length - 2]
    ;(cursor as { [index: string]: Key | KeyPath })[penultimateStep] = finalElement(path)

    return keyPath
}

const computeKeyPathArray = (keyPath: KeyPath): Array<Key> => {
    if (isNumber(keyPath) || isString(keyPath)) return [keyPath]

    const keyPathArray = []
    let cursor = keyPath as KeyPath
    while (isObject(cursor)) {
        let key: Key = Object.keys(cursor)[0]
        const maybeIndex = parseInt(key)
        if (!isNaN(maybeIndex)) key = maybeIndex
        keyPathArray.push(key)
        cursor = (cursor as { [index: string]: Key | KeyPath })[key] as KeyPath
    }
    keyPathArray.push(cursor)

    return keyPathArray
}

export { computeKeyPath, computeKeyPathArray }
