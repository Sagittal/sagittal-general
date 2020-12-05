import {Decimal} from "../../../../../src"
import {Roughness} from "../../../../../src/math"
import {computeRoughIntegerDecimal, isIntegerDecimalRough} from "../../../../../src/math/rational/decimal"

describe("isIntegerDecimalRough", (): void => {
    it("returns true when the integer decimal has no prime factors less than the requested roughness", (): void => {
        const integerDecimal = 221 as Decimal<{integer: true}>
        const roughness = 11 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false when the integer decimal has prime factors less than the requested roughness", (): void => {
        const integerDecimal = 33 as Decimal<{integer: true}>
        const roughness = 5 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", (): void => {
        const integerDecimal = 1 as Decimal<{integer: true}>
        const roughness = 5 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })

    it("another example", (): void => {
        const integerDecimal = 10 as Decimal<{integer: true}>
        const roughness = 11 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeFalsy()
    })

    it("yet another example", (): void => {
        const integerDecimal = 11 as Decimal<{integer: true}>
        const roughness = 11 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })
})

describe("computeRoughIntegerDecimal", (): void => {
    it("roughens the number to the desired roughness", (): void => {
        const integerDecimal = 1155 as Decimal<{integer: true}>      // 3 * 5 * 7 * 11
        const roughness = 7 as 7 & Roughness

        const actual = computeRoughIntegerDecimal(integerDecimal, roughness)

        const expected = 77 as Decimal<{integer: true, rough: 7}>
        expect(actual).toBe(expected)
    })
})

