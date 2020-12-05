import {computeRationalQuotientFromRationalScamon, Quotient, Scamon} from "../../../../../src"

describe("computeRationalQuotientFromRationalScamon", (): void => {
    it("given a rational scamon, returns a rational quotient", (): void => {
        const rationalScamon = {monzo: [-4, 4, -1]} as Scamon<{rational: true}>

        const actual = computeRationalQuotientFromRationalScamon(rationalScamon)

        const expected = [81, 80] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
