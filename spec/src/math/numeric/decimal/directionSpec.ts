import {Direction} from "../../../../../src"
import {Decimal, invertDecimal} from "../../../../../src/math/numeric/decimal"
import {computeSuperDecimal} from "../../../../../src/math/numeric/decimal/direction"

describe("computeSuperDecimal", (): void => {
    it("returns the decimal unchanged if the numerator is already greater than the denominator", (): void => {
        const decimal = 1.25 as Decimal<{direction: Direction.SUPER}>

        const actual: Decimal<{direction: Direction.SUPER}> = computeSuperDecimal(decimal)

        const expected = 1.25 as Decimal<{direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the decimal if the numerator is lesser than the denominator", (): void => {
        const decimal = 0.8 as Decimal<{direction: Direction.SUB}>

        const actual: Decimal<{direction: Direction.SUPER}> = computeSuperDecimal(decimal)

        const expected = 1.25 as Decimal<{direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("returns the decimal unchanged if the numerator is equal to the denominator", (): void => {
        const decimal = 1 as Decimal<{direction: Direction.UNISON}>

        const actual: Decimal<{direction: Direction.UNISON}> = computeSuperDecimal(decimal)

        const expected = 1 as Decimal<{direction: Direction.UNISON}>
        expect(actual).toEqual(expected)
    })
})

describe("invertDecimal", (): void => {
    it("returns the sub equivalent of the decimal if it is super", (): void => {
        const decimal = 1.25 as Decimal<{direction: Direction.SUPER}>

        const actual: Decimal<{direction: Direction.SUB}> = invertDecimal(decimal)

        const expected = 0.8 as Decimal<{direction: Direction.SUB}>
        expect(actual).toEqual(expected)
    })

    it("returns the decimal unchanged if it is unison", (): void => {
        const decimal = 1 as Decimal<{direction: Direction.UNISON}>

        const actual: Decimal<{direction: Direction.UNISON}> = invertDecimal(decimal)

        const expected = 1 as Decimal<{direction: Direction.UNISON}>
        expect(actual).toEqual(expected)
    })

    it("returns the super equivalent of the decimal if it is sub", (): void => {
        const decimal = 0.8 as Decimal<{direction: Direction.SUB}>

        const actual: Decimal<{direction: Direction.SUPER}> = invertDecimal(decimal)

        const expected = 1.25 as Decimal<{direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })
})
