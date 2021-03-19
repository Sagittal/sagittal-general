import {
    computeIrrationalDecimalFromSpev,
    Decimal,
    IRRATIONAL_SPEV_BASE_PEV,
    Quotient,
    Spev,
} from "../../../../../src"

describe("computeIrrationalDecimalFromSpev", (): void => {
    it("given an irrational spev, returns an irrational decimal", (): void => {
        const irrationalSpev = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [6.400178, 1] as Quotient,
        } as Spev<{rational: false}>

        const actual = computeIrrationalDecimalFromSpev(irrationalSpev)

        const expected = 84.45893 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })
})
