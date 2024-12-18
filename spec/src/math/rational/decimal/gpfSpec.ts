import { computeRationalDecimalGpf, Decimal, Max, Prime, Rational } from "../../../../../src"

describe("computeRationalDecimalGpf", (): void => {
    it("returns the greatest prime factor", (): void => {
        const rationalDecimal = 6.5 as Decimal<Rational> // 13 / 2

        const actual = computeRationalDecimalGpf(rationalDecimal)

        const expected = 13 as Max<Prime>
        expect(actual).toBe(expected)
    })
})
