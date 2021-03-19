import {computeRationalQuotientFromRationalSpev, Quotient, Spev} from "../../../../../src"

describe("computeRationalQuotientFromRationalSpev", (): void => {
    it("given a rational spev, returns a rational quotient", (): void => {
        const rationalSpev = {pev: [-4, 4, -1]} as Spev<{rational: true}>

        const actual = computeRationalQuotientFromRationalSpev(rationalSpev)

        const expected = [81, 80] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
