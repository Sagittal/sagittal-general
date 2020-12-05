import {Quotient} from "../../../../../src"
import {computeRationalQuotientProduct} from "../../../../../src/math/rational/quotient"

describe("computeRationalQuotientProduct", (): void => {
    it("returns the product of all the rational quotients (and reduces to lowest terms)", (): void => {
        const quotientA = [11, 7] as Quotient<{rational: true}>
        const quotientB = [3, 5] as Quotient<{rational: true}>
        const quotientC = [13, 11] as Quotient<{rational: true}>

        const actual = computeRationalQuotientProduct(quotientA, quotientB, quotientC)

        const expected = [39, 35] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
