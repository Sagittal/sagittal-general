import {computeRationalScamonCopfr, Copfr, Scamon} from "../../../../../src"

describe("computeRationalScamonCopfr", (): void => {
    it("returns the count of prime factors (with repetition) in the monzo", (): void => {
        const rationalScamon = {monzo: [5, 4, -3, -2, 5]} as Scamon<{rational: true}>

        const actual = computeRationalScamonCopfr(rationalScamon)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })
})
