import { computeQuotientProduct, Quotient } from "../../../../../src/math/numeric"

describe("computeQuotientProduct", (): void => {
    it("returns the product of all the quotients", (): void => {
        const quotientA = [11, 7] as Quotient
        const quotientB = [3, 5] as Quotient
        const quotientC = [13, 11] as Quotient

        const actual = computeQuotientProduct(quotientA, quotientB, quotientC)

        const expected = [429, 385] as Quotient
        expect(actual).toEqual(expected)
    })
})
