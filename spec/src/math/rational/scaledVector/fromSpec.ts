import {
    computeRationalScaledVectorFromRationalVector,
    Vector,
    ScaledVector,
    Rational,
} from "../../../../../src"

describe("computeRationalScaledVectorFromRationalVector", (): void => {
    it("returns a rational scaled vector with the rational vector as its vector", (): void => {
        const rationalVector = [0, 0, -2, 2] as Vector

        const actual = computeRationalScaledVectorFromRationalVector(rationalVector)

        const expected = { vector: rationalVector } as ScaledVector<Rational>
        expect(actual).toEqual(expected)
    })
})
