import {
    computeRationalScamonSmoothness,
    FIVE_SMOOTHNESS,
    isRationalScamonSmooth,
    Max,
    Prime,
    Scamon,
    THREE_SMOOTHNESS,
} from "../../../../../src"
import {Smoothness} from "../../../../../src/math"

describe("isRationalScamonSmooth", (): void => {
    it("returns true if the scamon is n-smooth (within the n prime limit)", (): void => {
        const rationalScamon = {monzo: [0, 0, 1]} as Scamon<{rational: true}>

        const actual = isRationalScamonSmooth(rationalScamon, FIVE_SMOOTHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scamon is not within the given prime limit", (): void => {
        const rationalScamon = {monzo: [0, 0, 1]} as Scamon<{rational: true}>

        const actual = isRationalScamonSmooth(rationalScamon, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalScamonSmoothness", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given rational scamon", (): void => {
        const rationalScamon = {monzo: [2, 3, 0, 0, 4]} as Scamon<{rational: true}>

        const actual = computeRationalScamonSmoothness(rationalScamon)

        const expected = 11 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when its monzo has trailing zeroes", (): void => {
        const rationalScamon = {monzo: [2, 3, 4, 0, 0]} as Scamon<{rational: true}>

        const actual = computeRationalScamonSmoothness(rationalScamon)

        const expected = 5 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for those with an empty monzo", (): void => {
        const rationalScamon = {monzo: [] as unknown[]} as Scamon<{rational: true}>

        const actual = computeRationalScamonSmoothness(rationalScamon)

        const expected = 1 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })
})
