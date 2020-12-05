import {Count} from "../types"
import {BLANK} from "./constants"
import {Char} from "./types"

const sumTexts = <T extends string>(...strings: T[]): T => {
    return join(strings, BLANK)
}

const length = <T extends string>(string: T): Count<Char & T> => {
    return string.length as Count<Char & T>
}

const join = <T extends string>(array: T[], separator?: string): T => {
    return array.join(separator) as T
}

const split = <T extends string>(string: T, separator: string | RegExp): T[] => {
    return string.split(separator) as T[]
}

export {
    sumTexts,
    length,
    join,
    split,
}
