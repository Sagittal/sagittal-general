import {Char, Io, Sentence, splitSentence, splitWord, Word} from "../../../src"

describe("splitSentence", (): void => {
    it("splits a sentence into words by whitespace", (): void => {
        const sentence = "see spot\nsee spot run" as Io & Sentence

        const actual = splitSentence(sentence)

        const expected = ["see", "spot", "see", "spot", "run"] as Array<Io & Word>
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
