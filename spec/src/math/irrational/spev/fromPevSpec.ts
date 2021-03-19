import {IRRATIONAL_SPEV_BASE_PEV, Pev, Quotient, Spev} from "../../../../../src"
import {computeIrrationalSpevFromPev} from "../../../../../src/math/irrational"

describe("computeIrrationalSpevFromPev", (): void => {
    it("when given a pev, returns an irrational spev", (): void => {
        const pev = [-5.5, 3.5] as Pev

        const actual = computeIrrationalSpevFromPev(pev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.047369, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a rational pev, still returns an irrational spev", (): void => {
        const pev = [-11, 7] as Pev<{rational: true}>

        const actual = computeIrrationalSpevFromPev(pev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.094738, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
