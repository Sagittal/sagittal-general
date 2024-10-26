import {formatVector, Vector} from "../../../../src"

describe("formatVector", (): void => {
    it("formats it correctly, with enough space that 2-digit negative counts will line up", (): void => {
        const vector = [-8, -6, 3, 5, -1] as Vector

        const actual = formatVector(vector)

        const expected = "[  -8  -6   3   5  -1 ⟩"
        expect(actual).toBe(expected)
    })

    it("can format it using George Secor's punctuated format", (): void => {
        const vector = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Vector

        const actual = formatVector(vector, {punctuated: true})

        const expected = "[  -8  -6,   3   5  -1,   0   0   0,   5   4   2,   3 ⟩"
        expect(actual).toBe(expected)
    })

    it("can format it in an abbreviated way, no longer worrying about vertical alignment", (): void => {
        const vector = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Vector

        const actual = formatVector(vector, {abbreviated: true})

        const expected = "[-8 -6 3 5 -1 0 0 0 5 4 2 3⟩"
        expect(actual).toBe(expected)
    })

    it("when both abbreviated and punctuated, uses commas as alternative to spaces, and eliminates groups of three 0's            ", (): void => {
        const vector = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Vector

        const actual = formatVector(vector, {punctuated: true, abbreviated: true})

        const expected = "[-8 -6,3 5 -1,,5 4 2,,,3⟩"
        expect(actual).toBe(expected)
    })

    it("does the right thing for 2,3-free vectors when punctuated and abbreviated", (): void => {
        const vector = [0, 0, 5, 7] as Vector

        const actual = formatVector(vector, {punctuated: true, abbreviated: true})

        const expected = "[,5 7⟩"
        expect(actual).toBe(expected)
    })

    it("does the right thing for a 2-free vector when punctuated and abbreviated", (): void => {
        const vector = [0, 3, 5] as Vector

        const actual = formatVector(vector, {punctuated: true, abbreviated: true})

        const expected = "[3,5⟩"
        expect(actual).toBe(expected)
    })
})
