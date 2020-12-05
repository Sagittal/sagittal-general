import {computeRationalScamonSopfr, Scamon, Sopfr} from "../../../../../src"

describe("computeRationalScamonSopfr", (): void => {
    it("sums the abs values of the prime factors (with repetition) in the monzo", (): void => {
        const rationalScamon = {monzo: [5, 6, 0, 0, 1, -1, 2]} as Scamon<{rational: true}>

        const actual = computeRationalScamonSopfr(rationalScamon)

        const expected = 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo", (): void => {
        const rationalScamon = {monzo: [] as unknown[]} as Scamon<{rational: true}>

        const actual = computeRationalScamonSopfr(rationalScamon)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })
})
