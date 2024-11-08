import {
    computeRationalScaledVectorSmoothness,
    FIVE_SMOOTHNESS,
    isRationalScaledVectorSmooth,
    Max,
    Prime,
    ScaledVector,
    THREE_SMOOTHNESS,
} from "../../../../../src"
import { Rational, Smoothness } from "../../../../../src/math"

describe("isRationalScaledVectorSmooth", (): void => {
    it("returns true if the scaled vector is n-smooth (within the n prime limit)", (): void => {
        const rationalScaledVector = { vector: [0, 0, 1] } as ScaledVector<Rational>

        const actual = isRationalScaledVectorSmooth(rationalScaledVector, FIVE_SMOOTHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaled vector is not within the given prime limit", (): void => {
        const rationalScaledVector = { vector: [0, 0, 1] } as ScaledVector<Rational>

        const actual = isRationalScaledVectorSmooth(rationalScaledVector, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalScaledVectorSmoothness", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given rational scaled vector", (): void => {
        const rationalScaledVector = { vector: [2, 3, 0, 0, 4] } as ScaledVector<Rational>

        const actual = computeRationalScaledVectorSmoothness(rationalScaledVector)

        const expected = 11 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when its vector has trailing zeroes", (): void => {
        const rationalScaledVector = { vector: [2, 3, 4, 0, 0] } as ScaledVector<Rational>

        const actual = computeRationalScaledVectorSmoothness(rationalScaledVector)

        const expected = 5 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for those with an empty vector", (): void => {
        const rationalScaledVector = { vector: [] as unknown[] } as ScaledVector<Rational>

        const actual = computeRationalScaledVectorSmoothness(rationalScaledVector)

        const expected = 1 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })
})
