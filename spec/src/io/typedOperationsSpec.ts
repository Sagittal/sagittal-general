import {
    Char,
    Clause,
    extendClause,
    extendSentence,
    extendWord,
    getChar,
    getWord,
    Index,
    Io,
    joinChars,
    joinClauses,
    joinWords,
    Sentence,
    splitSentence,
    splitWord,
    Word,
} from "../../../src"

describe("splitSentence", (): void => {
    it("splits a sentence into words by whitespace", (): void => {
        const sentence = "see spot\nsee spot run" as Io & Sentence

        const actual = splitSentence(sentence)

        const expected = ["see", "spot", "see", "spot", "run"] as Array<Io & Word>
        expect(actual).toEqual(expected)
    })

    it("can handle this", (): void => {
        const sentence = "d5 /|\\ d5 nt" as Io & Sentence

        const actual = splitSentence(sentence)

        const expected = ["d5", "/|\\", "d5", "nt"] as Array<Io & Word>
        expect(actual).toEqual(expected)
    })
})

describe("splitWord", (): void => {
    it("splits a word into chars by whitespace", (): void => {
        const word = "spot" as Io & Word

        const actual = splitWord(word)

        const expected = ["s", "p", "o", "t"] as Array<Io & Char>
        expect(actual).toEqual(expected)
    })
})

describe("joinWords", (): void => {
    it("joins words into a sentence with spaces", (): void => {
        const words = ["see", "spot", "see", "spot", "run"] as Array<Io & Word>

        const actual = joinWords(...words)

        const expected = "see spot see spot run" as Io & Sentence
        expect(actual).toEqual(expected)
    })
})

describe("joinChars", (): void => {
    it("joins chars into a word", (): void => {
        const chars = ["s", "p", "o", "t"] as Array<Io & Char>

        const actual = joinChars(...chars)

        const expected = "spot" as Io & Word
        expect(actual).toEqual(expected)
    })
})

describe("joinClauses", (): void => {
    it("joins clauses into a sentence", (): void => {
        const clauses = ["see spot ", "see spot run"] as Array<Io & Clause>

        const actual = joinClauses(...clauses)

        const expected = "see spot see spot run" as Io & Sentence
        expect(actual).toEqual(expected)
    })
})

describe("extendSentence", (): void => {
    it("extends a sentence with an additional clause", (): void => {
        const sentence = "see spot" as Io & Sentence
        const clause = "see spot run" as Io & Clause

        const actual = extendSentence(sentence, clause)

        const expected = "see spot see spot run" as Io & Sentence
        expect(actual).toEqual(expected)
    })

    it("can extend a sentence with multiple additional clauses", (): void => {
        const sentence = "see spot" as Io & Sentence
        const clauses = ["see spot run", "run spot run"] as Array<Io & Clause>

        const actual = extendSentence(sentence, ...clauses)

        const expected = "see spot see spot run run spot run" as Io & Sentence
        expect(actual).toEqual(expected)
    })
})

describe("extendClause", (): void => {
    it("extends a clause with an additional word", (): void => {
        const clause = "see spot" as Io & Clause
        const word = "run" as Io & Word

        const actual = extendClause(clause, word)

        const expected = "see spot run" as Io & Clause
        expect(actual).toEqual(expected)
    })

    it("can extend a clause with multiple additional words", (): void => {
        const clause = "see spot" as Io & Clause
        const words = ["run", "ashore"] as Array<Io & Word>

        const actual = extendClause(clause, ...words)

        const expected = "see spot run ashore" as Io & Clause
        expect(actual).toEqual(expected)
    })
})

describe("getChar", (): void => {
    it("gets a char of a word", (): void => {
        const word = "spot" as Io & Word

        const actual = getChar(word, 1 as Index<Char>)

        const expected = "p" as Io & Char
        expect(actual).toEqual(expected)
    })
})

describe("getWord", (): void => {
    it("gets a word of a sentence", (): void => {
        const sentence = "see spot\nsee spot run" as Io & Sentence

        const actual = getWord(sentence, 2 as Index<Word>)

        const expected = "see" as Io & Word
        expect(actual).toEqual(expected)
    })
})

describe("extendWord", (): void => {
    it("extends a word with an additional char", (): void => {
        const word = "run" as Io & Word
        const char = "t" as Io & Char

        const actual = extendWord(word, char)

        const expected = "runt" as Io & Word
        expect(actual).toEqual(expected)
    })

    it("can extend a word with multiple additional chars", (): void => {
        const word = "run" as Io & Word
        const chars = ["t", "s"] as Array<Io & Char>

        const actual = extendWord(word, ...chars)

        const expected = "runts" as Io & Word
        expect(actual).toEqual(expected)
    })
})
