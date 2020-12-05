import {Decimal, Quotient} from "../../../../../src"
import {computeRationalQuotientFromRationalDecimal} from "../../../../../src/math"

describe("computeRationalQuotientFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<{rational: true}>

        const actual = computeRationalQuotientFromRationalDecimal(rationalDecimal)

        const expected = [7, 5] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
