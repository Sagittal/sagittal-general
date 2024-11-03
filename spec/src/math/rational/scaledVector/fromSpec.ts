import { computeRationalScaledVectorFromRationalVector, Vector, ScaledVector } from "../../../../../src"

describe("computeRationalScaledVectorFromRationalVector", (): void => {
    it("returns a rational scaled vector with the rational vector as its vector", (): void => {
        const rationalVector = [0, 0, -2, 2] as Vector

        const actual = computeRationalScaledVectorFromRationalVector(rationalVector)

        const expected = { vector: rationalVector } as ScaledVector
        expect(actual).toEqual(expected)
    })
})
