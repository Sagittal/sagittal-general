import {
    computeIrrationalVectorFromScaledVector,
    Vector,
    Quotient,
    ScaledVector,
} from "../../../../../src"

describe("computeIrrationalVectorFromScaledVector", (): void => {
    it("works for an irrational scaled vector", (): void => {
        const irrationalScaledVector = {
            vector: [-1, 0, -1, 0, 1],
            scaler: [1, 3] as Quotient,
        } as ScaledVector<{ rational: false }>

        const actual = computeIrrationalVectorFromScaledVector(irrationalScaledVector)

        const expected = [-1 / 3, 0, -1 / 3, 0, 1 / 3] as Vector<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})
