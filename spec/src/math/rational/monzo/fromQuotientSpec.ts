import {computeRationalMonzoFromRationalQuotient, EMPTY_MONZO, Monzo, Quotient} from "../../../../../src"

describe("computeRationalMonzoFromRationalQuotient", (): void => {
    it("given a quotient in the form of an array of the numerator and denominator, returns it as a monzo", (): void => {
        const rationalQuotient = [4, 5] as Quotient<{rational: true}>

        const actual = computeRationalMonzoFromRationalQuotient(rationalQuotient)

        const expected = [2, 0, -1] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for 1/1", (): void => {
        const rationalQuotient = [1, 1] as Quotient<{rational: true}>

        const actual = computeRationalMonzoFromRationalQuotient(rationalQuotient)

        const expected = EMPTY_MONZO as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for quotients where the numerator is 1", (): void => {
        const rationalQuotient = [1, 5] as Quotient<{rational: true}>

        const actual = computeRationalMonzoFromRationalQuotient(rationalQuotient)

        const expected = [0, 0, -1] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for quotients where the denominator is 1", (): void => {
        const rationalQuotient = [5, 1] as Quotient<{rational: true}>

        const actual = computeRationalMonzoFromRationalQuotient(rationalQuotient)

        const expected = [0, 0, 1] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
