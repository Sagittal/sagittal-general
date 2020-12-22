import {computeLineCount, Count} from "../../../src"

describe("computeLineCount", (): void => {
    it("returns how many lines a text has", (): void => {
        const text = "one\ntwo\nthree\nfour"

        const actual = computeLineCount(text)

        const expected = 4 as Count<string>
        expect(actual).toBe(expected)
    })
})
