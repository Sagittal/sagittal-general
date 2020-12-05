import {computeQuotientFromMonzo, LogTarget, Monzo, Quotient} from "../../../../../src"
import * as save from "../../../../../src/io/log/save"

describe("computeQuotientFromMonzo", (): void => {
    it("converts a monzo into a two-element array representing the numerator and denominator", (): void => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [19683, 19600] as Quotient
        expect(actual).toEqual(expected)
    })

    it("reports an error when it converts a monzo that is too big to be accurately represented in quotient form           ", (): void => {
        spyOn(save, "saveLog")
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [9722180859015624, 1] as Quotient
        expect(actual).toEqual(expected)
        expect(save.saveLog).toHaveBeenCalledWith("Converted a monzo to a quotient where a fractional part exceeds JavaScript's maximum safe integer value. Accuracy has been compromised: [   0   0   6   4   2   2   0   1   1   1 ⟩ -> 9722180859015624", LogTarget.ERROR)
    })

    it("works for irrational monzos to irrational quotients", (): void => {
        const monzo = [-5.5, 3.5] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        const expected = [46.765372, 45.254834] as Quotient
        expect(actual).toBeCloseToArray(expected)
    })

    it("another edge case?", (): void => {
        const monzo = [-53, 33.5] as Monzo

        const actual = computeQuotientFromMonzo(monzo)

        // Whoa. this denominator happens to be the largest value JavaScript can encode as an integer, 2^53
        const expected = [9628575343626794, 9007199254740992] as Quotient
        expect(actual).toBeCloseToArray(expected)
    })
})
