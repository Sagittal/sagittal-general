import {computeQuotientFromPev, Pev, Quotient} from "../../../../../src"

describe("computeQuotientFromPev", (): void => {
    it("converts a pev into a two-element array representing the numerator and denominator", (): void => {
        const pev = [-4, 9, -2, -2] as Pev

        const actual = computeQuotientFromPev(pev)

        const expected = [19683, 19600] as Quotient
        expect(actual).toEqual(expected)
    })

    it("works for irrational pevs to irrational quotients", (): void => {
        const pev = [-5.5, 3.5] as Pev

        const actual = computeQuotientFromPev(pev)

        const expected = [46.765372, 45.254834] as Quotient
        expect(actual).toBeCloseToArray(expected)
    })
})
