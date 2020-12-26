import {Count} from "../types"
import {BLANK} from "./constants"
import {Char, Sentence, Word} from "./types"

const sumTexts = <T extends string>(...strings: T[]): T =>
    join(strings, BLANK)

const length = <T extends string>(string: T): Count<Char & T> =>
    string.length as Count<Char & T>

const join = <T extends string>(array: T[], separator?: string): T =>
    array.join(separator) as T

const split = <T extends string>(string: T, separator: string | RegExp): T[] =>
    string.split(separator) as T[]

const splitSentence = <T extends Sentence>(string: T): Array<Omit<T, "_SentenceBrand"> & Word> =>
    string.split(new RegExp(/\W+/)) as Array<Omit<T, "_SentenceBrand"> & Word>

const splitWord = <T extends Word>(string: T): Array<Omit<T, "_WordBrand"> & Char> =>
    string.split(BLANK) as Array<Omit<T, "_WordBrand"> & Char>

export {
    sumTexts,
    length,
    join,
    split,
    splitSentence,
    splitWord,
}
