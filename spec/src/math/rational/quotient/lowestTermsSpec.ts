import {computeLowestTermsRationalQuotient, isLowestTerms, Quotient} from "../../../../../src"

describe("computeLowestTermsRationalQuotient", (): void => {
    it("returns the rational quotient in lowest terms", (): void => {
        const rationalQuotient = [99, 21] as Quotient<{rational: true}>

        const actual = computeLowestTermsRationalQuotient(rationalQuotient)

        const expected = [33, 7] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("isLowestTerms", (): void => {
    it("returns true when the quotient is in lowest terms", (): void => {
        const rationalQuotient = [33, 7] as Quotient<{rational: true}>

        const actual = isLowestTerms(rationalQuotient)
        expect(actual).toBeTruthy()
    })

    it("returns false when the quotient is not in lowest terms", (): void => {
        const rationalQuotient = [99, 21] as Quotient<{rational: true}>

        const actual = isLowestTerms(rationalQuotient)
        expect(actual).toBeFalsy()
    })
})
