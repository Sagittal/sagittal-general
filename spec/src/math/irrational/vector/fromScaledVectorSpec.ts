import {
    computeIrrationalVectorFromScaledVector,
    Vector,
    Quotient,
    ScaledVector,
    Irrational,
} from "../../../../../src"

describe("computeIrrationalVectorFromScaledVector", (): void => {
    it("works for an irrational scaled vector", (): void => {
        const irrationalScaledVector = {
            vector: [-1, 0, -1, 0, 1],
            scaler: [1, 3] as Quotient,
        } as ScaledVector<Irrational>

        const actual = computeIrrationalVectorFromScaledVector(irrationalScaledVector)

        const expected = [-1 / 3, 0, -1 / 3, 0, 1 / 3] as Vector<Irrational>
        expect(actual).toEqual(expected)
    })
})
