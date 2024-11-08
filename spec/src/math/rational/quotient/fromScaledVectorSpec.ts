import {
    computeRationalQuotientFromRationalScaledVector,
    Quotient,
    Rational,
    ScaledVector,
} from "../../../../../src"

describe("computeRationalQuotientFromRationalScaledVector", (): void => {
    it("given a rational scaled vector, returns a rational quotient", (): void => {
        const rationalScaledVector = { vector: [-4, 4, -1] } as ScaledVector<Rational>

        const actual = computeRationalQuotientFromRationalScaledVector(rationalScaledVector)

        const expected = [81, 80] as Quotient
        expect(actual).toEqual(expected)
    })
})
