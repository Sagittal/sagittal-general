import {computeRationalDecimalCopfr, Copfr, Decimal} from "../../../../../src"

describe("computeRationalDecimalCopfr", (): void => {
    it("returns the count of prime factors with repetition", (): void => {
        const rationalDecimal = 275 as Decimal<{rational: true}>      // 5 * 5 * 11

        const actual = computeRationalDecimalCopfr(rationalDecimal)

        const expected = 3 as Copfr     // 5 & 5 & 11
        expect(actual).toBe(expected)
    })
})
