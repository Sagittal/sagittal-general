import {Quotient, Smoothness} from "../../../../../src/math"
import {computeRationalQuotientSmoothness, isRationalQuotientSmooth} from "../../../../../src/math/rational/quotient"

describe("isRationalQuotientSmooth", (): void => {
    it("returns true if the quotient is smooth to the requested smoothness", (): void => {
        const rationalQuotient = [7, 5] as Quotient<{rational: true}>

        const actual = isRationalQuotientSmooth(rationalQuotient, 7 as 7 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the quotient is not smooth to the requested smoothness", (): void => {
        const rationalQuotient = [7, 5] as Quotient<{rational: true}>

        const actual = isRationalQuotientSmooth(rationalQuotient, 5 as 5 & Smoothness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalQuotientSmoothness", (): void => {
    it("works", (): void => {
        const rationalQuotient = [11, 5] as Quotient<{rational: true}>

        const actual = computeRationalQuotientSmoothness(rationalQuotient)

        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})
