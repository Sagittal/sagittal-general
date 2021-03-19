import {computeRationalSpevCopfr, Copfr, Spev} from "../../../../../src"

describe("computeRationalSpevCopfr", (): void => {
    it("returns the count of prime factors (with repetition) in the pev", (): void => {
        const rationalSpev = {pev: [5, 4, -3, -2, 5]} as Spev<{rational: true}>

        const actual = computeRationalSpevCopfr(rationalSpev)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })
})
