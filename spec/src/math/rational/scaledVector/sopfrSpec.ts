import { computeRationalScaledVectorSopfr, ScaledVector, Sopfr } from "../../../../../src"

describe("computeRationalScaledVectorSopfr", (): void => {
    it("sums the abs values of the prime factors (with repetition) in the vector", (): void => {
        const rationalScaledVector = { vector: [5, 6, 0, 0, 1, -1, 2] } as ScaledVector

        const actual = computeRationalScaledVectorSopfr(rationalScaledVector)

        const expected = (2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17) as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty vector", (): void => {
        const rationalScaledVector = { vector: [] as unknown[] } as ScaledVector

        const actual = computeRationalScaledVectorSopfr(rationalScaledVector)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })
})
