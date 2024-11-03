import { Quotient } from "../../../../../src"
import { computeRationalQuotientProduct } from "../../../../../src/math/rational/quotient"

describe("computeRationalQuotientProduct", (): void => {
    it("returns the product of all the rational quotients (and reduces to lowest terms)", (): void => {
        const quotientA = [11, 7] as Quotient
        const quotientB = [3, 5] as Quotient
        const quotientC = [13, 11] as Quotient

        const actual = computeRationalQuotientProduct(quotientA, quotientB, quotientC)

        const expected = [39, 35] as Quotient
        expect(actual).toEqual(expected)
    })
})
