import { Map } from "../../../../src"
import { formatMap } from "../../../../src/io"

describe("formatMap", (): void => {
    it("formats it correctly, with enough space that 2-digit negative counts will line up", (): void => {
        const map = [-8, -6, 3, 5, -1] as Map

        const actual = formatMap(map)

        const expected = "⟨  -8  -6   3   5  -1 ]"
        expect(actual).toBe(expected)
    })

    it("can format it using George Secor's punctuated format", (): void => {
        const map = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Map

        const actual = formatMap(map, { punctuated: true })

        const expected =
            "⟨  -8  -6,   3   5  -1,   0   0   0,   5   4   2,   3 ]"
        expect(actual).toBe(expected)
    })

    it("can format it in an abbreviated way, no longer worrying about vertical alignment", (): void => {
        const map = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Map

        const actual = formatMap(map, { abbreviated: true })

        const expected = "⟨-8 -6 3 5 -1 0 0 0 5 4 2 3]"
        expect(actual).toBe(expected)
    })

    it("when both abbreviated and punctuated, uses commas as alternative to spaces, and eliminates groups of three 0's", (): void => {
        const map = [
            -8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3,
        ] as Map

        const actual = formatMap(map, {
            punctuated: true,
            abbreviated: true,
        })

        const expected = "⟨-8 -6,3 5 -1,,5 4 2,,,3]"
        expect(actual).toBe(expected)
    })

    it("does the right thing for 2,3-free maps when punctuated and abbreviated", (): void => {
        const map = [0, 0, 5, 7] as Map

        const actual = formatMap(map, {
            punctuated: true,
            abbreviated: true,
        })

        const expected = "⟨,5 7]"
        expect(actual).toBe(expected)
    })

    it("does the right thing for a 2-free map when punctuated and abbreviated", (): void => {
        const map = [0, 3, 5] as Map

        const actual = formatMap(map, {
            punctuated: true,
            abbreviated: true,
        })

        const expected = "⟨3,5]"
        expect(actual).toBe(expected)
    })
})
