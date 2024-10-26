import {
    computeScaledVectorFromVector,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Vector,
    Quotient,
    ScaledVector,
} from "../../../../../src"

describe("computeScaledVectorFromVector", (): void => {
    it("when given a rational vector, returns a rational scaled vector with that vector as its vector", (): void => {
        const vector = [0, 0, -2, 2] as Vector<{ rational: true }>

        const actual = computeScaledVectorFromVector(vector)

        const expected = { vector } as ScaledVector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational vector, returns an irrational scaled vector", (): void => {
        const vector = [-5.5, 3.5] as Vector<{ rational: false }>

        const actual = computeScaledVectorFromVector(vector)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.047369, 1] as Quotient,
        } as ScaledVector<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
