import {computeQuotientFromMonzo, Monzo, Quotient} from "../../../../../src"

describe("computeQuotientFromMonzo", (): void => {
    it("converts a monzo into a two-element array representing the numerator and denominator", (): void => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [19683, 19600] as Quotient
        expect(actual).toEqual(expected)
    })

    it("works for irrational monzos to irrational quotients", (): void => {
        const monzo = [-5.5, 3.5] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [46.765372, 45.254834] as Quotient
        expect(actual).toBeCloseToArray(expected)
    })
})
