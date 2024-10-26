import {
    computeIrrationalDecimalFromScaledVector,
    Decimal,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Quotient,
    ScaledVector,
} from "../../../../../src"

describe("computeIrrationalDecimalFromScaledVector", (): void => {
    it("given an irrational scaled vector, returns an irrational decimal", (): void => {
        const irrationalScaledVector = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [6.400178, 1] as Quotient,
        } as ScaledVector<{ rational: false }>

        const actual = computeIrrationalDecimalFromScaledVector(irrationalScaledVector)

        const expected = 84.45893 as Decimal<{ rational: false }>
        expect(actual).toBeCloseTo(expected)
    })
})
