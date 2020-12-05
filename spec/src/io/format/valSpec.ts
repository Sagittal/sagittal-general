import {Val} from "../../../../src"
import {formatVal} from "../../../../src/io"

describe("formatVal", (): void => {
    it("formats it correctly, with enough space that 2-digit negative exponents will line up", (): void => {
        const val = [-8, -6, 3, 5, -1] as Val

        const actual = formatVal(val)

        const expected = "⟨  -8  -6   3   5  -1 ]"
        expect(actual).toBe(expected)
    })

    it("can format it using George Secor's punctuated format", (): void => {
        const val = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Val

        const actual = formatVal(val, {punctuated: true})

        const expected = "⟨  -8  -6,   3   5  -1,   0   0   0,   5   4   2,   3 ]"
        expect(actual).toBe(expected)
    })

    it("can format it in an abbreviated way, no longer worrying about vertical alignment", (): void => {
        const val = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Val

        const actual = formatVal(val, {abbreviated: true})

        const expected = "⟨-8 -6 3 5 -1 0 0 0 5 4 2 3]"
        expect(actual).toBe(expected)
    })

    it("when both abbreviated and punctuated, uses commas as alternative to spaces, and eliminates groups of three 0's            ", (): void => {
        const val = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Val

        const actual = formatVal(val, {punctuated: true, abbreviated: true})

        const expected = "⟨-8 -6,3 5 -1,,5 4 2,,,3]"
        expect(actual).toBe(expected)
    })

    it("does the right thing for 2,3-free vals when punctuated and abbreviated", (): void => {
        const val = [0, 0, 5, 7] as Val

        const actual = formatVal(val, {punctuated: true, abbreviated: true})

        const expected = "⟨,5 7]"
        expect(actual).toBe(expected)
    })

    it("does the right thing for a 2-free val when punctuated and abbreviated", (): void => {
        const val = [0, 3, 5] as Val

        const actual = formatVal(val, {punctuated: true, abbreviated: true})

        const expected = "⟨3,5]"
        expect(actual).toBe(expected)
    })
})
