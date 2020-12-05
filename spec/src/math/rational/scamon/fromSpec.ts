import {computeRationalScamonFromRationalMonzo, Monzo, Scamon} from "../../../../../src"

describe("computeRationalScamonFromRationalMonzo", (): void => {
    it("returns a rational scamon with the rational monzo as its monzo", (): void => {
        const rationalMonzo = [0, 0, -2, 2] as Monzo<{rational: true}>

        const actual = computeRationalScamonFromRationalMonzo(rationalMonzo)

        const expected = {monzo: rationalMonzo} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
