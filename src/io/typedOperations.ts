import {Count} from "../types"
import {BLANK, SPACE} from "./constants"
import {Char, Sentence, Word} from "./types"

const sumTexts = <T extends string>(...strings: T[]): T =>
    join(strings, BLANK)

const length = <T extends string>(string: T): Count<Char & T> =>
    string.length as Count<Char & T>

const join = <T extends string>(array: T[], separator?: string): T =>
    array.join(separator) as T

const split = <T extends string>(string: T, separator: string | RegExp): T[] =>
    string.split(separator) as T[]

const splitSentence = <T extends Sentence>(sentence: T): Array<Omit<T, "_SentenceBrand"> & Word> =>
    sentence.split(new RegExp(/\W+/)) as Array<Omit<T, "_SentenceBrand"> & Word>

const splitWord = <T extends Word>(word: T): Array<Omit<T, "_WordBrand"> & Char> =>
    word.split(BLANK) as Array<Omit<T, "_WordBrand"> & Char>

const joinWords = <T extends Word>(words: T[]): Omit<T, "_WordBrand"> & Sentence =>
    words.join(SPACE) as Omit<T, "_WordBrand"> & Sentence

const joinChars = <T extends Char>(chars: T[]): Omit<T, "_CharBrand"> & Word =>
    chars.join(BLANK) as Omit<T, "_CharBrand"> & Word

export {
    sumTexts,
    length,
    join,
    split,
    splitSentence,
    splitWord,
    joinWords,
    joinChars,
}
