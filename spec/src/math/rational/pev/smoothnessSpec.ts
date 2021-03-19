import {computeRationalPevSmoothness} from "../../../../../src"
import {isRationalPevSmooth, Pev, Smoothness, THREE_SMOOTHNESS} from "../../../../../src/math"

describe("isRationalPevSmooth", (): void => {
    it("returns true if the pev is smooth to the requested smoothness", (): void => {
        const rationalPev = [0, 0, 1] as Pev<{rational: true}>

        const actual = isRationalPevSmooth(rationalPev, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("works even if the pev hasn't been trimmed for some reason", (): void => {
        const rationalPev = [0, 0, 1, 0, 0, 0] as Pev<{rational: true}>

        const actual = isRationalPevSmooth(rationalPev, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pev is not smooth to the requested smoothness", (): void => {
        const rationalPev = [0, 0, 1] as Pev<{rational: true}>

        const actual = isRationalPevSmooth(rationalPev, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalPevSmoothness", (): void => {
    it("works", (): void => {
        const rationalPev = [1, 0, -1, 0, 1] as Pev<{rational: true}>

        const actual = computeRationalPevSmoothness(rationalPev)

        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})
