import { Decimal } from "../../../../../src"
import { Integer, Roughness } from "../../../../../src/math"
import { computeRoughIntegerDecimal, isIntegerDecimalRough } from "../../../../../src/math/rational/decimal"

describe("isIntegerDecimalRough", (): void => {
    it("returns true when the integer decimal has no prime factors less than the requested roughness", (): void => {
        const integerDecimal = 221 as Decimal<Integer>
        const roughness = 11 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false when the integer decimal has prime factors less than the requested roughness", (): void => {
        const integerDecimal = 33 as Decimal<Integer>
        const roughness = 5 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", (): void => {
        const integerDecimal = 1 as Decimal<Integer>
        const roughness = 5 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })

    it("another example", (): void => {
        const integerDecimal = 10 as Decimal<Integer>
        const roughness = 11 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeFalsy()
    })

    it("yet another example", (): void => {
        const integerDecimal = 11 as Decimal<Integer>
        const roughness = 11 as Roughness

        const actual = isIntegerDecimalRough(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })
})

describe("computeRoughIntegerDecimal", (): void => {
    it("roughens the number to the desired roughness", (): void => {
        const integerDecimal = 1155 as Decimal<Integer> // 3 * 5 * 7 * 11
        const roughness = 7 as 7 & Roughness

        const actual = computeRoughIntegerDecimal(integerDecimal, roughness)

        const expected = 77 as Decimal<Integer & { rough: 7 }>
        expect(actual).toBe(expected)
    })

    it("can handle huge numbers", (): void => {
        const integerDecimal = 564859072962 as Decimal<Integer> // 2 * 3^25
        const roughness = 3 as 3 & Roughness

        const actual = computeRoughIntegerDecimal(integerDecimal, roughness)

        const expected = 282429536481 as Decimal<Integer & { rough: 3 }>
        expect(actual).toBe(expected)
    })
})
