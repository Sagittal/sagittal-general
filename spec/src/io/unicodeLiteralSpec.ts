import {
    BLANK,
    computeUnicodeFromUnicodeLiteral,
    computeUnicodeLiteralFromUnicode,
    Io,
    isUnicodeLiteral,
    Unicode,
    UnicodeLiteral,
    Word,
} from "../../../src"

describe("isUnicodeLiteral", (): void => {
    it("returns true when the input is a unicode literal", (): void => {
        const candidateUnicodeLiteral = "U+5E78" as Io & Word

        const actual = isUnicodeLiteral(candidateUnicodeLiteral)

        expect(actual).toBeTruthy()
    })

    it("returns false when the input is not a unicode literal", (): void => {
        const candidateUnicodeLiteral = "UV-5E78" as Io & Word

        const actual = isUnicodeLiteral(candidateUnicodeLiteral)

        expect(actual).toBeFalsy()
    })
})

describe("computeUnicodeLiteralFromUnicode", (): void => {
    it("can get you the codepoint of a given Unicode char, using lowercase", (): void => {
        const unicode = "" as Unicode & Word

        const actual = computeUnicodeLiteralFromUnicode(unicode)

        const expected = "U+E08A" as UnicodeLiteral
        expect(actual).toBe(expected)
    })

    it("does something reasonable for an empty Unicode", (): void => {
        const unicode = BLANK as Unicode & Word

        const actual = computeUnicodeLiteralFromUnicode(unicode)

        const expected = "(BLANK)" as UnicodeLiteral
        expect(actual).toBe(expected)
    })
})

describe("computeUnicodeFromUnicodeLiteral", (): void => {
    it("works", (): void => {
        const unicodeLiteral = "U+E08A" as UnicodeLiteral

        const actual = computeUnicodeFromUnicodeLiteral(unicodeLiteral)

        const expected = "\ue08a" as Unicode & Word
        expect(actual).toBe(expected)
    })

    it("works for >4 digit code points", (): void => {
        const unicodeLiteral = "U+10E08A" as UnicodeLiteral

        const actual = computeUnicodeFromUnicodeLiteral(unicodeLiteral)

        const expected = "\u{10e08a}" as Unicode & Word
        expect(actual).toBe(expected)
    })

    it("accepts various formats", (): void => {
        expect(computeUnicodeFromUnicodeLiteral("U+5E78" as UnicodeLiteral)).toBe("幸" as Unicode & Word)
        expect(computeUnicodeFromUnicodeLiteral("u+5e78" as UnicodeLiteral)).toBe("幸" as Unicode & Word)
        expect(computeUnicodeFromUnicodeLiteral("U5E78" as UnicodeLiteral)).toBe("幸" as Unicode & Word)
        expect(computeUnicodeFromUnicodeLiteral("u5e78" as UnicodeLiteral)).toBe("幸" as Unicode & Word)
        expect(computeUnicodeFromUnicodeLiteral("\\u+5E78" as UnicodeLiteral)).toBe("幸" as Unicode & Word)
        expect(computeUnicodeFromUnicodeLiteral("\\u+5e78" as UnicodeLiteral)).toBe("幸" as Unicode & Word)
    })
})
