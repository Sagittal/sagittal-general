import { IRRATIONAL_SCALED_VECTOR_BASE_VECTOR, Vector, Quotient, ScaledVector } from "../../../../../src"
import { computeIrrationalScaledVectorFromVector, Irrational } from "../../../../../src/math/irrational"

describe("computeIrrationalScaledVectorFromVector", (): void => {
    it("when given a vector, returns an irrational scaled vector", (): void => {
        const vector = [-5.5, 3.5] as Vector

        const actual = computeIrrationalScaledVectorFromVector(vector)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.047369, 1] as Quotient,
        } as ScaledVector<Irrational>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a rational vector, still returns an irrational scaled vector", (): void => {
        const vector = [-11, 7] as Vector

        const actual = computeIrrationalScaledVectorFromVector(vector)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.094738, 1] as Quotient,
        } as ScaledVector<Irrational>
        expect(actual).toBeCloseToObject(expected)
    })
})
