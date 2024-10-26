import {Decimal, Vector, Multiplier} from "../../../../../src"
import {addVectors, subtractVectors, sumVectors} from "../../../../../src/math"
import {multiplyVector} from "../../../../../src/math/numeric/vector/typedOperations"

describe("sumVectors", (): void => {
    it("sums each of the terms of all of the vectors", (): void => {
        const vectorA = [3, 2, 1, 0, -1, -5] as Vector
        const vectorB = [0, -2, 4, 7, -3, 6, 1] as Vector
        const vectorC = [1, 1, 0, 1, 1] as Vector

        const actual = sumVectors(vectorA, vectorB, vectorC)

        const expected = [4, 1, 5, 8, -3, 1, 1] as Vector
        expect(actual).toEqual(expected)
    })

    it("trims the result when appropriate", (): void => {
        const vectorA = [3, 2, 1, 0, -1, -5] as Vector
        const vectorB = [0, -2, 4, 7, -3, 5] as Vector

        const actual = sumVectors(vectorA, vectorB)

        const expected = [3, 0, 5, 7, -4] as Vector
        expect(actual).toEqual(expected)
    })
})

describe("addVectors", (): void => {
    it("trims the result when appropriate", (): void => {
        const augendVector = [3, 2, 1, 0, -1, -5] as Vector
        const addendVector = [0, -2, 4, 7, -3, 5] as Vector

        const actual = addVectors(augendVector, addendVector)

        const expected = [3, 0, 5, 7, -4] as Vector
        expect(actual).toEqual(expected)
    })

    it("works when the augend vector is shorter than the addend vector", (): void => {
        const augendVector = [3, 2, 1] as Vector
        const addendVector = [0, 0, 0, 0, 1] as Vector

        const actual = addVectors(augendVector, addendVector)

        const expected = [3, 2, 1, 0, 1] as Vector
        expect(actual).toEqual(expected)
    })

    it("works when the augend vector is longer than the addend vector", (): void => {
        const augendVector = [0, 1, 1, 0, 1] as Vector
        const addendVector = [3, 1] as Vector

        const actual = addVectors(augendVector, addendVector)

        const expected = [3, 2, 1, 0, 1] as Vector
        expect(actual).toEqual(expected)
    })
})

describe("subtractVectors", (): void => {
    it("trims the result when appropriate", (): void => {
        const minuendVector = [3, 2, 1, 0, -1, -5] as Vector
        const subtrahendVector = [0, -2, 4, 7, -3, -5] as Vector

        const actual = subtractVectors(minuendVector, subtrahendVector)

        const expected = [3, 4, -3, -7, 2] as Vector
        expect(actual).toEqual(expected)
    })
})

describe("multiplyVector", (): void => {
    it("multiplies each prime count vector by the multiplier", (): void => {
        const vector = [0, 1, -3, 2] as Vector<{rational: true}>
        const multiplier = 5 as Decimal<{integer: true}> & Multiplier

        const actual = multiplyVector(vector, multiplier)

        const expected = [0, 5, -15, 10] as Vector<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
