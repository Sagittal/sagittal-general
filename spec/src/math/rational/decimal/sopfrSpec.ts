import { Decimal, Integer, Rational, Sopfr } from "../../../../../src"
import { computeRationalDecimalSopfr } from "../../../../../src/math/rational/decimal/sopfr"

describe("computeRationalDecimalSopfr", (): void => {
    it("returns the sum of prime factors with repetition for a rational decimal", (): void => {
        const rationalDecimal = 3.4 as Decimal<Rational>

        const actual = computeRationalDecimalSopfr(rationalDecimal)

        const expected = (5 + 17) as Sopfr
        expect(actual).toBe(expected)
    })

    it("returns the sum of prime factors with repetition for an integer decimal", (): void => {
        const integerDecimal = 121 as Decimal<Integer>

        const actual = computeRationalDecimalSopfr(integerDecimal)

        const expected = (11 + 11) as Sopfr
        expect(actual).toBe(expected)
    })
})
