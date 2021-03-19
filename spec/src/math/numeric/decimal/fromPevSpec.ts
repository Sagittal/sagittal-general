import {computeDecimalFromPev, Decimal, MAX_JS_PRECISION, Pev} from "../../../../../src"

describe("computeDecimalFromPev", (): void => {
    it("returns the decimal representation of the pev", (): void => {
        const pev = [-1, -1, 0, 1] as Pev   // 7/6

        const actual = computeDecimalFromPev(pev)

        const expected = 1.166667 as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for a huge pev", (): void => {
        const pev = [-50508, 31867] as Pev

        const actual = computeDecimalFromPev(pev)

        // 3^31867 = 2.648647428 * 10^15204
        // 2^50508 = 2.648628185 * 10^15204
        // 2.648647428 / 2.648628185 ≈ 1.000007265
        const expected = 1.0000072649602405 as Decimal
        expect(actual).toBeCloseToTyped(expected, MAX_JS_PRECISION)
    })

    it("works for a huge pev which has no recourse to stay balanced", (): void => {
        const pev = [0, 31867] as Pev

        const actual = computeDecimalFromPev(pev)

        const expected = Infinity as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge pev", (): void => {
        const pev = [-2108, 1330] as Pev

        const actual = computeDecimalFromPev(pev)

        // 3^1330 = 3.726222442 * 10^634
        // 2^2108 = 3.725897126 * 10^634
        // 3.726222442 / 3.725897126 = 1.00008731213
        const expected = 1.000087312 as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this other huge pev", (): void => {
        const pev = [-1726, 1330] as Pev

        const actual = computeDecimalFromPev(pev)

        // 3^1330 = 3.726222442 * 10^634
        // 2^1726 = 3.782444079 * 10^519
        // (3.726222442 / 3.782444079) * 10^(634-519) = 0.98513616174 * 10^115
        const expected = 9.85136161641151e+114 as Decimal
        expect(actual).toEqual(expected)
    })

    it("works for this other huge pev's inverse", (): void => {
        const pev = [1726, -1330] as Pev

        const actual = computeDecimalFromPev(pev)

        // 1 / 0.98513616174 = 1.0150881055204
        const expected = 1.0150881055203759e-115 as Decimal
        expect(actual).toEqual(expected)
    })
})
