import {computeRationalMonzoSmoothness} from "../../../../../src"
import {isRationalMonzoSmooth, Monzo, Smoothness, THREE_SMOOTHNESS} from "../../../../../src/math"

describe("isRationalMonzoSmooth", (): void => {
    it("returns true if the monzo is smooth to the requested smoothness", (): void => {
        const rationalMonzo = [0, 0, 1] as Monzo<{rational: true}>

        const actual = isRationalMonzoSmooth(rationalMonzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("works even if the monzo hasn't been trimmed for some reason", (): void => {
        const rationalMonzo = [0, 0, 1, 0, 0, 0] as Monzo<{rational: true}>

        const actual = isRationalMonzoSmooth(rationalMonzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not smooth to the requested smoothness", (): void => {
        const rationalMonzo = [0, 0, 1] as Monzo<{rational: true}>

        const actual = isRationalMonzoSmooth(rationalMonzo, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalMonzoSmoothness", (): void => {
    it("works", (): void => {
        const rationalMonzo = [1, 0, -1, 0, 1] as Monzo<{rational: true}>

        const actual = computeRationalMonzoSmoothness(rationalMonzo)

        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})
