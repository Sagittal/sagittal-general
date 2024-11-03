import { Count, Index } from "../types"
import { BLANK, SPACE } from "./constants"
import { Char, Clause, Sentence, Word } from "./types"

const sumTexts = <T extends string>(...strings: T[]): T => join(strings, BLANK)

const length = <T extends string>(string: T): Count<Char & T> => string.length as Count<Char & T>

const join = <T extends string>(array: T[], separator?: string): T => array.join(separator) as T

const split = <T extends string>(string: T, separator: string | RegExp): T[] => string.split(separator) as T[]

const splitSentence = <T extends Sentence>(sentence: T): Array<Omit<T, "_SentenceBrand"> & Word> =>
    sentence.split(/\s+/) as Array<Omit<T, "_SentenceBrand"> & Word>

const splitWord = <T extends Word>(word: T): Array<Omit<T, "_WordBrand"> & Char> =>
    Array.from(word) as Array<Omit<T, "_WordBrand"> & Char>

const joinWords = <T extends Word>(...words: T[]): Omit<T, "_WordBrand"> & Sentence =>
    words.join(SPACE) as Omit<T, "_WordBrand"> & Sentence

const joinChars = <T extends Char>(...chars: T[]): Omit<T, "_CharBrand"> & Word =>
    chars.join(BLANK) as Omit<T, "_CharBrand"> & Word

const extendSentence = <T extends string>(
    sentence: Omit<T, "_SentenceBrand"> & Sentence,
    ...clauses: Array<Omit<T, "_ClauseBrand"> & Clause>
): T & Sentence => {
    let extendedSentence = sentence as T & Sentence
    for (const clause of clauses) {
        extendedSentence = `${extendedSentence} ${clause}` as T & Sentence
    }

    return extendedSentence
}

const joinClauses = <T extends Clause>(...clauses: T[]): Omit<T, "_WordBrand"> & Sentence =>
    clauses.join(BLANK) as Omit<T, "_WordBrand"> & Sentence

const extendClause = <T extends string>(
    clause: Omit<T, "_ClauseBrand"> & Clause,
    ...words: Array<Omit<T, "_WordBrand"> & Word>
): T & Clause => {
    let extendedClause = clause as T & Clause
    for (const word of words) {
        extendedClause = `${extendedClause} ${word}` as T & Clause
    }

    return extendedClause
}

const getChar = <T extends Word>(
    word: T,
    index: Index<Omit<T, "_WordBrand"> & Char>,
): Omit<T, "_WordBrand"> & Char => splitWord(word)[index] as Omit<T, "_WordBrand"> & Char

const getWord = <T extends Sentence>(
    sentence: T,
    index: Index<Omit<T, "_SentenceBrand"> & Word>,
): Omit<T, "_SentenceBrand"> & Word => splitSentence(sentence)[index] as Omit<T, "_SentenceBrand"> & Word

const extendWord = <T extends string>(
    word: Omit<T, "_WordBrand"> & Word,
    ...chars: Array<Omit<T, "_CharBrand"> & Char>
): T & Word => sumTexts(word as string, ...(chars as string[])) as T & Word

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
    extendWord,
}
