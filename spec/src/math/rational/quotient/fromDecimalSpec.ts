import { Decimal, Quotient } from "../../../../../src"
import { computeRationalQuotientFromRationalDecimal, Rational } from "../../../../../src/math"

describe("computeRationalQuotientFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<Rational>

        const actual = computeRationalQuotientFromRationalDecimal(rationalDecimal)

        const expected = [7, 5] as Quotient
        expect(actual).toEqual(expected)
    })
})
