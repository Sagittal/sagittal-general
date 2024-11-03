import { Decimal } from "../../../../../src"
import { computeRationalDecimalSopf } from "../../../../../src/math/rational/decimal/sopf"
import { Integer, Sopf } from "../../../../../src/math/rational/types"

describe("computeRationalDecimalSopf", (): void => {
    it("returns the sum of prime factors (without repetition) for an integer decimal", (): void => {
        const integerDecimal = 847 as Decimal<Integer> // 7 * 11 * 11

        const actual = computeRationalDecimalSopf(integerDecimal)

        const expected = (7 + 11) as Sopf
        expect(actual).toBe(expected)
    })
})
