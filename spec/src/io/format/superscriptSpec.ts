import { formatDecimalAsSuperscript } from "../../../../src"

describe("formatDecimalAsSuperscript", (): void => {
    it("converts a decimal into superscript digits", (): void => {
        const decimal = 15

        const actual = formatDecimalAsSuperscript(decimal)

        const expected = "¹⁵"
        expect(actual).toBe(expected)
    })
})
