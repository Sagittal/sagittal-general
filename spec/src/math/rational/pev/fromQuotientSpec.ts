import {computeRationalPevFromRationalQuotient, EMPTY_PEV, Pev, Quotient} from "../../../../../src"

describe("computeRationalPevFromRationalQuotient", (): void => {
    it("given a quotient in the form of an array of the numerator and denominator, returns it as a pev", (): void => {
        const rationalQuotient = [4, 5] as Quotient<{rational: true}>

        const actual = computeRationalPevFromRationalQuotient(rationalQuotient)

        const expected = [2, 0, -1] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for 1/1", (): void => {
        const rationalQuotient = [1, 1] as Quotient<{rational: true}>

        const actual = computeRationalPevFromRationalQuotient(rationalQuotient)

        const expected = EMPTY_PEV as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for quotients where the numerator is 1", (): void => {
        const rationalQuotient = [1, 5] as Quotient<{rational: true}>

        const actual = computeRationalPevFromRationalQuotient(rationalQuotient)

        const expected = [0, 0, -1] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for quotients where the denominator is 1", (): void => {
        const rationalQuotient = [5, 1] as Quotient<{rational: true}>

        const actual = computeRationalPevFromRationalQuotient(rationalQuotient)

        const expected = [0, 0, 1] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
