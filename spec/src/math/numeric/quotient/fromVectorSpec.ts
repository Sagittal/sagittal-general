import { computeQuotientFromVector, Vector, Quotient, NoProperties } from "../../../../../src"

describe("computeQuotientFromVector", (): void => {
    it("converts a vector into a two-element array representing the numerator and denominator", (): void => {
        const vector = [-4, 9, -2, -2] as Vector<NoProperties>

        const actual = computeQuotientFromVector(vector)

        const expected = [19683, 19600] as Quotient
        expect(actual).toEqual(expected)
    })

    it("works for irrational vectors to irrational quotients", (): void => {
        const vector = [-5.5, 3.5] as Vector<NoProperties>

        const actual = computeQuotientFromVector(vector)

        const expected = [46.765372, 45.254834] as Quotient
        expect(actual).toBeCloseToArray(expected)
    })
})
