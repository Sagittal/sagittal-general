import {stringify} from "../io"
import {shallowClone} from "./clone"
import {computeKeyPathArray} from "./keyPath"
import {isUndefined} from "./typeGuards"
import {KeyPath, Obj} from "./types"

const dig = (
    object: Obj,
    keyPath: KeyPath,
    {parents = undefined, strict = false}: {parents?: [] | {}, strict?: boolean} = {},
): unknown => {
    let cursor: Obj | unknown = object

    const keyPathArray = computeKeyPathArray(keyPath)

    for (const key of keyPathArray) {
        if (!isUndefined((cursor as Obj)[key])) {
            cursor = (cursor as Obj)[key]
        } else if (parents) {
            (cursor as Obj)[key] = shallowClone(parents)
            cursor = (cursor as Obj)[key]
        } else if (strict) {
            throw new Error(`Failed to dig value at ${stringify(keyPathArray)} of ${stringify(object)}.`)
        } else {
            return undefined
        }
    }

    return cursor
}

export {
    dig,
}
