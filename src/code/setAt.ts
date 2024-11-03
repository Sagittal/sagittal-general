import { dig } from "./dig"
import { finalElement, indexOfFinalElement } from "./finalElement"
import { computeKeyPath, computeKeyPathArray } from "./keyPath"
import { KeyPath, Obj } from "./types"

const setAt = (
    object: Obj,
    keyPath: KeyPath,
    value: unknown,
    options: { parents?: [] | object } = {},
): void => {
    const keyPathArray = computeKeyPathArray(keyPath)

    const upToSecondToLastStepOfKeyPathArray = keyPathArray.slice(0, indexOfFinalElement(keyPathArray))
    const upToSecondToLastStepOfKeyPath = computeKeyPath(...upToSecondToLastStepOfKeyPathArray)

    const cursor = dig(object, upToSecondToLastStepOfKeyPath, options) as Obj
    const finalKey = finalElement(keyPathArray)

    cursor[finalKey] = value
}

export { setAt }
