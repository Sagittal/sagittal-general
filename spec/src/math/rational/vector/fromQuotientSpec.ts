import { computeRationalVectorFromRationalQuotient, EMPTY_VECTOR, Vector, Quotient } from "../../../../../src"

describe("computeRationalVectorFromRationalQuotient", (): void => {
    it("given a quotient in the form of an array of the numerator and denominator, returns it as a vector", (): void => {
        const rationalQuotient = [4, 5] as Quotient

        const actual = computeRationalVectorFromRationalQuotient(rationalQuotient)

        const expected = [2, 0, -1] as Vector
        expect(actual).toEqual(expected)
    })

    it("works for 1/1", (): void => {
        const rationalQuotient = [1, 1] as Quotient

        const actual = computeRationalVectorFromRationalQuotient(rationalQuotient)

        const expected = EMPTY_VECTOR
        expect(actual).toEqual(expected)
    })

    it("works for quotients where the numerator is 1", (): void => {
        const rationalQuotient = [1, 5] as Quotient

        const actual = computeRationalVectorFromRationalQuotient(rationalQuotient)

        const expected = [0, 0, -1] as Vector
        expect(actual).toEqual(expected)
    })

    it("works for quotients where the denominator is 1", (): void => {
        const rationalQuotient = [5, 1] as Quotient

        const actual = computeRationalVectorFromRationalQuotient(rationalQuotient)

        const expected = [0, 0, 1] as Vector
        expect(actual).toEqual(expected)
    })
})
