import {computeQuotientFromMonzo, Monzo, Quotient} from "../../../../../src"

describe("computeQuotientFromMonzo", (): void => {
    it("converts a monzo into a two-element array representing the numerator and denominator", (): void => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [19683, 19600] as Quotient
        expect(actual).toEqual(expected)
    })

    it("throws an error when it converts a monzo that is too big to be accurately represented in quotient form           ", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo   // 9722180859015624/1

        expect((): void => {
            computeQuotientFromMonzo(monzo)
        }).toThrowError("Converted a monzo to a quotient where a fractional part exceeds JavaScript's maximum safe integer value. Accuracy has been compromised: [   0   0   6   4   2   2   0   1   1   1 ⟩ -> 9722180859015624")
    })

    it("works for irrational monzos to irrational quotients", (): void => {
        const monzo = [-5.5, 3.5] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [46.765372, 45.254834] as Quotient
        expect(actual).toBeCloseToArray(expected)
    })
})
