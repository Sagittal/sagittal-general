import {
    computeRoughRationalVector,
    EMPTY_VECTOR,
    isRationalVectorRough,
    Vector,
    Roughness,
} from "../../../../../src/math"

describe("computeRoughRationalVector", (): void => {
    it("roughens the vector to the requested roughness (setting initial elements of the vector to 0)", (): void => {
        const rationalVector = [5, 6, 1, 0, 3] as Vector<{ rational: true }>
        const roughness = 5 as 5 & Roughness

        const actual: Vector<{ rational: true; rough: 5 }> = computeRoughRationalVector(
            rationalVector,
            roughness,
        )

        const expected = [0, 0, 1, 0, 3] as Vector<{ rational: true; rough: 5 }>
        expect(actual).toEqual(expected)
    })

    it("trims the vector if necessary (after setting elements to 0, the vector may be emptied)", (): void => {
        const rationalVector = [5, 6] as Vector<{ rational: true }>
        const roughness = 5 as 5 & Roughness

        const actual: Vector<{ rational: true; rough: 5 }> = computeRoughRationalVector(
            rationalVector,
            roughness,
        )

        const expected = EMPTY_VECTOR as Vector<{ rational: true; rough: 5 }>
        expect(actual).toEqual(expected)
    })
})

describe("isRationalVectorRough", (): void => {
    it("returns true if the vector is at the requested roughness", (): void => {
        const rationalVector = [0, 0, 0, 4, 3] as Vector<{ rational: true }>

        const actual = isRationalVectorRough(rationalVector, 7 as 7 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the vector is not at the requested roughness", (): void => {
        const rationalVector = [0, -5, 0, 4, 3] as Vector<{ rational: true }>

        const actual = isRationalVectorRough(rationalVector, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})
