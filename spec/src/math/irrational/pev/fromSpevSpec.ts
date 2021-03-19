import {computeIrrationalPevFromSpev, Pev, Quotient, Spev} from "../../../../../src"

describe("computeIrrationalPevFromSpev", (): void => {
    it("works for an irrational spev", (): void => {
        const irrationalSpev = {
            pev: [-1, 0, -1, 0, 1],
            scaler: [1, 3] as Quotient,
        } as Spev<{rational: false}>

        const actual = computeIrrationalPevFromSpev(irrationalSpev)

        const expected = [-1 / 3, 0, -1 / 3, 0, 1 / 3] as Pev<{rational: false}>
        expect(actual).toEqual(expected)
    })
})
