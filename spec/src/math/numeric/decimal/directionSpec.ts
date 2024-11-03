import { Decimal, invertDecimal } from "../../../../../src/math/numeric/decimal"
import { computeSuperDecimal } from "../../../../../src/math/numeric/decimal/direction"
import { Sub, Super, Unison } from "../../../../../src/math/numeric/types"

describe("computeSuperDecimal", (): void => {
    it("returns the decimal unchanged if the numerator is already greater than the denominator", (): void => {
        const decimal = 1.25 as Decimal<Super>

        const actual: Decimal<Super> = computeSuperDecimal(decimal)

        const expected = 1.25 as Decimal<Super>
        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the decimal if the numerator is lesser than the denominator", (): void => {
        const decimal = 0.8 as Decimal<Sub>

        const actual: Decimal<Super> = computeSuperDecimal(decimal)

        const expected = 1.25 as Decimal<Super>
        expect(actual).toEqual(expected)
    })

    it("returns the decimal unchanged if the numerator is equal to the denominator", (): void => {
        const decimal = 1 as Decimal<Unison>

        const actual: Decimal<Unison> = computeSuperDecimal(decimal)

        const expected = 1 as Decimal<Unison>
        expect(actual).toEqual(expected)
    })
})

describe("invertDecimal", (): void => {
    it("returns the sub equivalent of the decimal if it is super", (): void => {
        const decimal = 1.25 as Decimal<Super>

        const actual: Decimal<Sub> = invertDecimal(decimal)

        const expected = 0.8 as Decimal<Sub>
        expect(actual).toEqual(expected)
    })

    it("returns the decimal unchanged if it is unison", (): void => {
        const decimal = 1 as Decimal<Unison>

        const actual: Decimal<Unison> = invertDecimal(decimal)

        const expected = 1 as Decimal<Unison>
        expect(actual).toEqual(expected)
    })

    it("returns the super equivalent of the decimal if it is sub", (): void => {
        const decimal = 0.8 as Decimal<Sub>

        const actual: Decimal<Super> = invertDecimal(decimal)

        const expected = 1.25 as Decimal<Super>
        expect(actual).toEqual(expected)
    })
})
