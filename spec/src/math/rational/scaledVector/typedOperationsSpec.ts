import {
    addRationalScaledVectors,
    computeRationalScaledVectorGeometricMean,
    Decimal,
    Integer,
    Irrational,
    Mean,
    MeanType,
    Multiplier,
    multiplyScaledVector,
    ScaledVector,
    subtractRationalScaledVectors,
    sumRationalScaledVectors,
} from "../../../../../src"

describe("subtractRationalScaledVectors", (): void => {
    it("works for two rational scaled vectors, subtracting the 'from' scaled vector's vector from the 'to' scaled vector's vector", (): void => {
        const minuendScaledVector = { vector: [-2, 0, 0, 1] } as ScaledVector
        const subtrahendScaledVector = { vector: [-1, 1] } as ScaledVector

        const actual = subtractRationalScaledVectors(
            minuendScaledVector,
            subtrahendScaledVector,
        ) as ScaledVector

        const expected = { vector: [-1, -1, 0, 1] } as ScaledVector
        expect(actual).toEqual(expected)
    })
})

describe("addRationalScaledVectors", (): void => {
    it("works", (): void => {
        const augendRationalScaledVector = { vector: [2, -1, -1, 1] } as ScaledVector
        const addendRationalScaledVector = { vector: [-2, 1] } as ScaledVector

        const actual = addRationalScaledVectors(
            augendRationalScaledVector,
            addendRationalScaledVector,
        ) as ScaledVector

        const expected = { vector: [0, 0, -1, 1] } as ScaledVector
        expect(actual).toEqual(expected)
    })
})

describe("computeRationalScaledVectorGeometricMean", (): void => {
    it("sums the vectors and takes the nth-root where n is the count of scaled vectors", (): void => {
        const scaledVectorA = { vector: [0, -5, 1] } as ScaledVector
        const scaledVectorB = { vector: [2, 0, 1] } as ScaledVector
        const scaledVectorC = { vector: [0, 4, 1] } as ScaledVector

        const actual = computeRationalScaledVectorGeometricMean(scaledVectorA, scaledVectorB, scaledVectorC)

        const expected = {
            vector: [2, -1, 3],
            scaler: [1, 3],
        } as Mean<{
            of: ScaledVector<Irrational>
            meanType: MeanType.GEOMETRIC
        }>
        expect(actual).toEqual(expected)
    })
})

describe("multiplyScaledVector", (): void => {
    it("multiplies each prime count vector by the multiplier", (): void => {
        const scaledVector = { vector: [0, 1, -3, 2] } as ScaledVector
        const multiplier = 5 as Decimal<Integer> & Multiplier

        const actual = multiplyScaledVector(scaledVector, multiplier)

        const expected = { vector: [0, 5, -15, 10] } as ScaledVector
        expect(actual).toEqual(expected)
    })
})

describe("sumRationalScaledVectors", (): void => {
    it("sums the corresponding terms in each scaled vector's vector", (): void => {
        const scaledVectorA = { vector: [0, -5, 1] } as ScaledVector
        const scaledVectorB = { vector: [2, 0, 1] } as ScaledVector
        const scaledVectorC = { vector: [0, 4, 1] } as ScaledVector

        const actual = sumRationalScaledVectors(scaledVectorA, scaledVectorB, scaledVectorC) as ScaledVector

        const expected = { vector: [2, -1, 3] } as ScaledVector
        expect(actual).toEqual(expected)
    })
})
