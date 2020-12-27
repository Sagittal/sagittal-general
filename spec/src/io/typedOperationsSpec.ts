import {
    Char,
    Clause,
    extendClause,
    extendSentence,
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
        const sentence = "see spot " as Io & Sentence
        const clause = "see spot run" as Io & Clause

        const actual = extendSentence(sentence, clause)

        const expected = "see spot see spot run" as Io & Sentence
        expect(actual).toEqual(expected)
    })
})

describe("extendClause", (): void => {
    it("extends a clause with an additional word", (): void => {
        const clause = "see spot " as Io & Clause
        const word = "run" as Io & Word

        const actual = extendClause(clause, word)

        const expected = "see spot run" as Io & Clause
        expect(actual).toEqual(expected)
    })
})
