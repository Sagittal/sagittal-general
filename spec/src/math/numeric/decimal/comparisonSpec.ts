import { DEFAULT_PRECISION } from "../../../../../src"
import { areDecimalsEqual } from "../../../../../src/math"

describe("areDecimalsEqual", (): void => {
    it("works when two decimals are equal", (): void => {
        const decimalA = 0.123456
        const decimalB = 0.123456

        const actual = areDecimalsEqual(decimalA, decimalB)

        expect(actual).toBeTruthy()
    })

    it("works when two decimals are not equal", (): void => {
        const decimalA = 0.123456
        const decimalB = 7.654321

        const actual = areDecimalsEqual(decimalA, decimalB)

        expect(actual).toBeFalsy()
    })

    it("works when two decimals are not exactly equal but they are equal to the requested precision", (): void => {
        const decimalA = 0.123456
        const decimalB = 0.123457

        const actual = areDecimalsEqual(decimalA, decimalB, DEFAULT_PRECISION)

        expect(actual).toBeTruthy()
    })
})
