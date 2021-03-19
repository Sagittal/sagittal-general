import {computeRationalSpevFromRationalPev, Pev, Spev} from "../../../../../src"

describe("computeRationalSpevFromRationalPev", (): void => {
    it("returns a rational spev with the rational pev as its pev", (): void => {
        const rationalPev = [0, 0, -2, 2] as Pev<{rational: true}>

        const actual = computeRationalSpevFromRationalPev(rationalPev)

        const expected = {pev: rationalPev} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
