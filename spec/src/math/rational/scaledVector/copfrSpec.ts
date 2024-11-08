import { computeRationalScaledVectorCopfr, Copfr, Rational, ScaledVector } from "../../../../../src"

describe("computeRationalScaledVectorCopfr", (): void => {
    it("returns the count of prime factors (with repetition) in the vector", (): void => {
        const rationalScaledVector = { vector: [5, 4, -3, -2, 5] } as ScaledVector<Rational>

        const actual = computeRationalScaledVectorCopfr(rationalScaledVector)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })
})
