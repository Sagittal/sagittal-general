import {computeRationalSpevSopfr, Spev, Sopfr} from "../../../../../src"

describe("computeRationalSpevSopfr", (): void => {
    it("sums the abs values of the prime factors (with repetition) in the pev", (): void => {
        const rationalSpev = {pev: [5, 6, 0, 0, 1, -1, 2]} as Spev<{rational: true}>

        const actual = computeRationalSpevSopfr(rationalSpev)

        const expected = 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty pev", (): void => {
        const rationalSpev = {pev: [] as unknown[]} as Spev<{rational: true}>

        const actual = computeRationalSpevSopfr(rationalSpev)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })
})
