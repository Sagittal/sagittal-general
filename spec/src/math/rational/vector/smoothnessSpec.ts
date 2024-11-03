import { computeRationalVectorSmoothness } from "../../../../../src"
import { isRationalVectorSmooth, Vector, Smoothness, THREE_SMOOTHNESS } from "../../../../../src/math"

describe("isRationalVectorSmooth", (): void => {
    it("returns true if the vector is smooth to the requested smoothness", (): void => {
        const rationalVector = [0, 0, 1] as Vector

        const actual = isRationalVectorSmooth(rationalVector, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("works even if the vector hasn't been trimmed for some reason", (): void => {
        const rationalVector = [0, 0, 1, 0, 0, 0] as Vector

        const actual = isRationalVectorSmooth(rationalVector, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the vector is not smooth to the requested smoothness", (): void => {
        const rationalVector = [0, 0, 1] as Vector

        const actual = isRationalVectorSmooth(rationalVector, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalVectorSmoothness", (): void => {
    it("works", (): void => {
        const rationalVector = [1, 0, -1, 0, 1] as Vector

        const actual = computeRationalVectorSmoothness(rationalVector)

        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})
