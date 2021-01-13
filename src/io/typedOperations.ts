import {Count, Index} from "../types"
import {BLANK, SPACE} from "./constants"
import {Char, Clause, Sentence, Word} from "./types"

const sumTexts = <T extends string>(...strings: T[]): T =>
    join(strings, BLANK)

const length = <T extends string>(string: T): Count<Char & T> =>
    string.length as Count<Char & T>

const join = <T extends string>(array: T[], separator?: string): T =>
    array.join(separator) as T

const split = <T extends string>(string: T, separator: string | RegExp): T[] =>
    string.split(separator) as T[]

const splitSentence = <T extends Sentence>(sentence: T): Array<Omit<T, "_SentenceBrand"> & Word> =>
    sentence.split(/\s+/) as Array<Omit<T, "_SentenceBrand"> & Word>

const splitWord = <T extends Word>(word: T): Array<Omit<T, "_WordBrand"> & Char> =>
    word.split(BLANK) as Array<Omit<T, "_WordBrand"> & Char>

const joinWords = <T extends Word>(...words: T[]): Omit<T, "_WordBrand"> & Sentence =>
    words.join(SPACE) as Omit<T, "_WordBrand"> & Sentence

const joinChars = <T extends Char>(...chars: T[]): Omit<T, "_CharBrand"> & Word =>
    chars.join(BLANK) as Omit<T, "_CharBrand"> & Word

const extendSentence = <T extends string>(
    sentence: Omit<T, "_SentenceBrand"> & Sentence,
    clause: Omit<T, "_ClauseBrand"> & Clause,
): T & Sentence =>
    sumTexts(sentence as string, clause as string) as T & Sentence

const joinClauses = <T extends Clause>(...clauses: T[]): Omit<T, "_WordBrand"> & Sentence =>
    clauses.join(BLANK) as Omit<T, "_WordBrand"> & Sentence

const extendClause = <T extends string>(
    clause: Omit<T, "_ClauseBrand"> & Clause,
    word: Omit<T, "_WordBrand"> & Word,
): T & Clause =>
    sumTexts(clause as string, word as string) as T & Clause

const getChar = <T extends Word>(
    word: T,
    index: Index<Omit<T, "_WordBrand"> & Char>,
): Omit<T, "_WordBrand"> & Char =>
    splitWord(word)[index] as Omit<T, "_WordBrand"> & Char

const getWord = <T extends Sentence>(
    sentence: T,
    index: Index<Omit<T, "_SentenceBrand"> & Word>,
): Omit<T, "_SentenceBrand"> & Word =>
    splitSentence(sentence)[index] as Omit<T, "_SentenceBrand"> & Word

export {
    sumTexts,
    length,
    join,
    split,
    splitSentence,
    splitWord,
    joinWords,
    joinChars,
    extendSentence,
    joinClauses,
    extendClause,
    getChar,
    getWord,
}
