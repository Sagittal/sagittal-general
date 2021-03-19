import {computeSpevFromPev, IRRATIONAL_SPEV_BASE_PEV, Pev, Quotient, Spev} from "../../../../../src"

describe("computeSpevFromPev", (): void => {
    it("when given a rational pev, returns a rational spev with that pev as its pev", (): void => {
        const pev = [0, 0, -2, 2] as Pev<{rational: true}>

        const actual = computeSpevFromPev(pev)

        const expected = {pev} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational pev, returns an irrational spev", (): void => {
        const pev = [-5.5, 3.5] as Pev<{rational: false}>

        const actual = computeSpevFromPev(pev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.047369, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
