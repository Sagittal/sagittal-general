import { computeDecimalFromVector, Decimal, MAX_JS_PRECISION, Vector, NoProperties } from "../../../../../src"

describe("computeDecimalFromVector", (): void => {
    it("returns the decimal representation of the vector", (): void => {
        const vector = [-1, -1, 0, 1] as Vector // 7/6

        const actual = computeDecimalFromVector(vector)

        const expected = 1.166667 as Decimal
        expect(actual).toBeCloseTo(expected)
    })

    it("works for a huge vector", (): void => {
        const vector = [-50508, 31867] as Vector

        const actual = computeDecimalFromVector(vector)

        // 3^31867 = 2.648647428 * 10^15204
        // 2^50508 = 2.648628185 * 10^15204
        // 2.648647428 / 2.648628185 ≈ 1.000007265
        const expected = 1.0000072649602405 as Decimal
        expect(actual).toBeCloseTo(expected, MAX_JS_PRECISION)
    })

    it("works for a huge vector which has no recourse to stay balanced", (): void => {
        const vector = [0, 31867] as Vector

        const actual = computeDecimalFromVector(vector)

        const expected = Infinity
        expect(actual).toBeCloseTo(expected)
    })

    it("works for this huge vector", (): void => {
        const vector = [-2108, 1330] as Vector

        const actual = computeDecimalFromVector(vector)

        // 3^1330 = 3.726222442 * 10^634
        // 2^2108 = 3.725897126 * 10^634
        // 3.726222442 / 3.725897126 = 1.00008731213
        const expected = 1.000087312 as Decimal
        expect(actual).toBeCloseTo(expected)
    })

    it("works for this other huge vector", (): void => {
        const vector = [-1726, 1330] as Vector<NoProperties>

        const actual = computeDecimalFromVector(vector)

        // 3^1330 = 3.726222442 * 10^634
        // 2^1726 = 3.782444079 * 10^519
        // (3.726222442 / 3.782444079) * 10^(634-519) = 0.98513616174 * 10^115
        const expected = 9.85136161641151e114 as Decimal
        expect(actual).toEqual(expected)
    })

    it("works for this other huge vector's inverse", (): void => {
        const vector = [1726, -1330] as Vector<NoProperties>

        const actual = computeDecimalFromVector(vector)

        // 1 / 0.98513616174 = 1.0150881055204
        const expected = 1.0150881055203759e-115 as Decimal
        expect(actual).toEqual(expected)
    })
})
