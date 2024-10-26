import {
    computeScaledVectorFromDecimal,
    computeScaledVectorFromQuotient,
    Decimal,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Vector,
    slowTestOnlyRunInFullSuite,
    Quotient,
    ScaledVector,
} from "../../../../../src"

describe("computeScaledVectorFromDecimal", (): void => {
    it("when given a rational decimal, returns a rational scaled vector", (): void => {
        const rationalDecimal = 84 as Decimal<{ rational: true }>

        const actual = computeScaledVectorFromDecimal(rationalDecimal)

        const expected = {
            vector: [2, 1, 0, 1] as Vector<{ rational: true }>,
        } as ScaledVector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational decimal, returns a scaled vector which includes it as a power of 2, with the base 2 as the vector and exponent as the scaler quotient (the log over 1)", (): void => {
        const decimal = 84.458901 as Decimal<{ rational: false }>

        const actual = computeScaledVectorFromDecimal(decimal)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [6.400178, 1] as Quotient,
        } as ScaledVector<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a decimal which is not identified as rational or irrational, but can be construed as rational, returns a rational scaled vector", (): void => {
        slowTestOnlyRunInFullSuite()

        const decimal = 15.94323 as Decimal

        const actual = computeScaledVectorFromDecimal(decimal)

        const expected = {
            vector: [-5, 13, -5],
        } as ScaledVector<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("computeScaledVectorFromQuotient", (): void => {
    it("when given a rational quotient, returns a rational scaled vector", (): void => {
        const quotient = [4, 3] as Quotient<{ rational: true }>

        const actual = computeScaledVectorFromQuotient(quotient)

        const expected = { vector: [2, -1] } as ScaledVector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational quotient, returns an irrational scaled vector", (): void => {
        const quotient = [4.346, 3.23211] as Quotient<{ rational: false }>

        const actual = computeScaledVectorFromQuotient(quotient)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.427212, 1] as Quotient,
        } as ScaledVector<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
