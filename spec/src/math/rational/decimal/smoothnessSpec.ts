import {Decimal} from "../../../../../src"
import {computeIntegerDecimalSmoothness, Smoothness} from "../../../../../src/math/rational"
import {computeRationalDecimalSmoothness, isIntegerDecimalSmooth} from "../../../../../src/math/rational/decimal"

describe("isIntegerDecimalSmooth", (): void => {
    it("returns true when the integer decimal has no prime factors greater than the smoothness", (): void => {
        const integerDecimal = 35 as Decimal<{integer: true}>
        const smoothness = 7 as 7 & Smoothness

        const actual = isIntegerDecimalSmooth(integerDecimal, smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false when the integer decimal has prime factors greater than the smoothness", (): void => {
        const integerDecimal = 35 as Decimal<{integer: true}>
        const smoothness = 5 as 5 & Smoothness

        const actual = isIntegerDecimalSmooth(integerDecimal, smoothness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalDecimalSmoothness", (): void => {
    it("works for an integer decimal", (): void => {
        const integerDecimal = 35 as Decimal<{integer: true}>

        const actual = computeRationalDecimalSmoothness(integerDecimal)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for a rational decimal", (): void => {
        const rationalDecimal = 5.5 as Decimal<{rational: true}>  // 11 / 2

        const actual = computeRationalDecimalSmoothness(rationalDecimal)

        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})

describe("computeIntegerDecimalSmoothness", (): void => {
    it("returns the smoothness of the integer decimal", (): void => {
        const integerDecimal = 49 as Decimal<{integer: true}>

        const actual = computeIntegerDecimalSmoothness(integerDecimal)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })
})
