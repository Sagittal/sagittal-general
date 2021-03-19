import {
    computeRationalSpevSmoothness,
    FIVE_SMOOTHNESS,
    isRationalSpevSmooth,
    Max,
    Prime,
    Spev,
    THREE_SMOOTHNESS,
} from "../../../../../src"
import {Smoothness} from "../../../../../src/math"

describe("isRationalSpevSmooth", (): void => {
    it("returns true if the spev is n-smooth (within the n prime limit)", (): void => {
        const rationalSpev = {pev: [0, 0, 1]} as Spev<{rational: true}>

        const actual = isRationalSpevSmooth(rationalSpev, FIVE_SMOOTHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the spev is not within the given prime limit", (): void => {
        const rationalSpev = {pev: [0, 0, 1]} as Spev<{rational: true}>

        const actual = isRationalSpevSmooth(rationalSpev, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalSpevSmoothness", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given rational spev", (): void => {
        const rationalSpev = {pev: [2, 3, 0, 0, 4]} as Spev<{rational: true}>

        const actual = computeRationalSpevSmoothness(rationalSpev)

        const expected = 11 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when its pev has trailing zeroes", (): void => {
        const rationalSpev = {pev: [2, 3, 4, 0, 0]} as Spev<{rational: true}>

        const actual = computeRationalSpevSmoothness(rationalSpev)

        const expected = 5 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for those with an empty pev", (): void => {
        const rationalSpev = {pev: [] as unknown[]} as Spev<{rational: true}>

        const actual = computeRationalSpevSmoothness(rationalSpev)

        const expected = 1 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })
})
