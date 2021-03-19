import {IRRATIONAL_SPEV_BASE_PEV, Quotient, Spev} from "../../../../../src"
import {computeIrrationalQuotientFromSpev} from "../../../../../src/math/irrational/quotient"

describe("computeIrrationalQuotientFromSpev", (): void => {
    it("returns a dumb irrational quotient, essentially the same irrational decimal you would have gotten, but over 1            ", (): void => {
        const irrationalSpev = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [6.400178, 1] as Quotient,
        } as Spev<{rational: false}>

        const actual = computeIrrationalQuotientFromSpev(irrationalSpev)

        const expected = [84.45893, 1] as Quotient<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
