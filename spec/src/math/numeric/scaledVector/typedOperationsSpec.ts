import {
    addScaledVectors,
    halveScaledVector,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Max,
    Vector,
    Quotient,
    scaleScaledVector,
    ScaledVector,
    Irrational,
} from "../../../../../src"
import {
    maxScaledVector,
    subtractScaledVectors,
} from "../../../../../src/math/numeric/scaledVector/typedOperations"

describe("addScaledVectors", (): void => {
    it("even if the scaled vectors are both rational, this method returns an irrational scaled vector", (): void => {
        const augendScaledVector = { vector: [2, -1, -1, 1] } as ScaledVector
        const addendScaledVector = { vector: [-2, 1] } as ScaledVector

        const actual = addScaledVectors(augendScaledVector, addendScaledVector)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.485427, 1],
        } as ScaledVector<Irrational>
        // @ts-ignore can't get this matcher to recognize types anymore
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("subtractScaledVectors", (): void => {
    it("works for two rational scaled vectors, returning an irrational interval", (): void => {
        const minuendScaledVector = { vector: [-2, 0, 0, 1] } as ScaledVector
        const subtrahendScaledVector = { vector: [-1, 1] } as ScaledVector

        const actual = subtractScaledVectors(
            minuendScaledVector,
            subtrahendScaledVector,
        ) as ScaledVector as ScaledVector<Irrational>

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.222392, 1],
        } as ScaledVector<Irrational>
        // @ts-ignore can't get this matcher to recognize types anymore
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the from scaled vector is irrational", (): void => {
        const minuendScaledVector = { vector: [0, 0, 1] } as ScaledVector
        const subtrahendScaledVector = {
            vector: [-2, 0, 0, 1] as Vector,
            scaler: [1, 3] as Quotient,
        } as ScaledVector<Irrational>

        const actual = subtractScaledVectors(minuendScaledVector, subtrahendScaledVector)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [2.05281, 1] as Quotient,
        } as ScaledVector<Irrational>
        // @ts-ignore can't get this matcher to recognize types anymore
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the to scaled vector is irrational", (): void => {
        const minuendScaledVector = {
            vector: [0, 0, 1] as Vector,
            scaler: [1, 3] as Quotient,
        } as ScaledVector<Irrational>
        const subtrahendScaledVector = { vector: [-2, 0, 0, 1] } as ScaledVector

        const actual = subtractScaledVectors(
            minuendScaledVector as ScaledVector,
            subtrahendScaledVector,
        ) as unknown

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [-0.033379, 1] as Quotient,
        } as ScaledVector<Irrational> as unknown
        // @ts-ignore
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when both the from and to scaled vectors are irrational", (): void => {
        const minuendScaledVector = {
            vector: [0, 0, 1] as Vector,
            scaler: [1, 3] as Quotient,
        } as ScaledVector<Irrational>
        const subtrahendScaledVector = {
            vector: [-2, 0, 0, 1] as Vector,
            scaler: [1, 3] as Quotient,
        } as ScaledVector<Irrational>

        const actual = subtractScaledVectors(minuendScaledVector, subtrahendScaledVector)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.504858, 1] as Quotient,
        } as ScaledVector<Irrational>
        // @ts-ignore can't get this matcher to recognize types anymore
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("halveScaledVector", (): void => {
    it("introduces a scaler (exponent) of 1/2 (root 2)", (): void => {
        const scaledVector = { vector: [-11, 7] } as ScaledVector

        const actual = halveScaledVector(scaledVector) as ScaledVector<Irrational>

        const expected = {
            vector: [-11, 7] as Vector,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<Irrational>
        expect(actual).toEqual(expected)
    })

    it("works if a scaler is already present", (): void => {
        const scaledVector = {
            vector: [-11, 7] as Vector,
            scaler: [5, 3] as Quotient,
        } as ScaledVector<Irrational>

        const actual = halveScaledVector(scaledVector)

        const expected = {
            vector: [-11, 7] as Vector,
            scaler: [5, 6] as Quotient,
        } as ScaledVector<Irrational>
        expect(actual).toEqual(expected)
    })
})

describe("scaleScaledVector", (): void => {
    it("introduces a scaler", (): void => {
        const scaledVector = { vector: [-11, 7] } as ScaledVector

        const actual = scaleScaledVector(scaledVector, [5, 3] as Quotient) as ScaledVector<Irrational>

        const expected = {
            vector: [-11, 7] as Vector,
            scaler: [5, 3] as Quotient,
        } as ScaledVector<Irrational>
        expect(actual).toEqual(expected)
    })

    it("takes the product of the provided scaler with an existing scaler", (): void => {
        const scaledVector = {
            vector: [-11, 7] as Vector,
            scaler: [5, 3],
        } as ScaledVector<Irrational>

        const actual = scaleScaledVector(scaledVector, [1, 2] as Quotient)

        const expected = {
            vector: [-11, 7] as Vector,
            scaler: [5, 6] as Quotient,
        } as ScaledVector<Irrational>
        expect(actual).toEqual(expected)
    })
})

describe("maxScaledVector", (): void => {
    it("works for a mix of rational and irrational scaled vectors", (): void => {
        const scaledVectorA = { vector: [-2, -1, 0, 0, 1] } as ScaledVector // 11/12
        const scaledVectorB = {
            vector: [1] as Vector,
            scaler: [3, 1] as Quotient,
        } as ScaledVector<Irrational> // 8
        const scaledVectorC = { vector: [0, 1] } as ScaledVector // 7

        const actual = maxScaledVector(scaledVectorA, scaledVectorB, scaledVectorC)

        expect(actual).toEqual(scaledVectorB as ScaledVector as Max<ScaledVector>)
    })
})
