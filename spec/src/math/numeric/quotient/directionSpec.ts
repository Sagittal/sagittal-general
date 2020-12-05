import {computeSuperQuotient, Direction} from "../../../../../src"
import {
    Denominator,
    invertQuotient,
    isQuotientSub,
    isQuotientSuper,
    isQuotientUnison,
    Numerator,
    Quotient,
} from "../../../../../src/math/numeric/quotient"

describe("isQuotientSuper", (): void => {
    it("returns true if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientSuper(quotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientSuper(quotient)

        expect(actual).toBeFalsy()
    })

    it("returns false if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientSuper(quotient)

        expect(actual).toBeFalsy()
    })
})

describe("isQuotientSub", (): void => {
    it("returns false if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientSub(quotient)

        expect(actual).toBeFalsy()
    })

    it("returns false if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientSub(quotient)

        expect(actual).toBeFalsy()
    })

    it("returns true if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientSub(quotient)

        expect(actual).toBeTruthy()
    })
})

describe("isQuotientUnison", (): void => {
    it("returns false if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientUnison(quotient)

        expect(actual).toBeFalsy()
    })

    it("returns true if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientUnison(quotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const quotient = [numerator, denominator] as Quotient

        const actual = isQuotientUnison(quotient)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperQuotient", (): void => {
    const expected = [5, 4] as Quotient<{direction: Direction.SUPER}>

    it("returns the quotient unchanged if the numerator is already greater than the denominator", (): void => {
        const quotient = [5, 4] as Quotient<{direction: Direction.SUPER}>

        const actual: Quotient<{direction: Direction.SUPER}> = computeSuperQuotient(quotient)

        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the quotient if the numerator is lesser than the denominator", (): void => {
        const quotient = [4, 5] as Quotient<{direction: Direction.SUB}>

        const actual: Quotient<{direction: Direction.SUPER}> = computeSuperQuotient(quotient)

        expect(actual).toEqual(expected)
    })

    it("returns the quotient unchanged if the numerator is equal to the denominator", (): void => {
        const quotient = [4.5, 4.5] as Quotient<{direction: Direction.UNISON}>

        const actual: Quotient<{direction: Direction.UNISON}> = computeSuperQuotient(quotient)

        expect(actual).toEqual(quotient)
    })
})

describe("invertQuotient", (): void => {
    it("returns the sub equivalent of the quotient if it is super", (): void => {
        const quotient = [5, 4] as Quotient<{direction: Direction.SUPER}>

        const actual: Quotient<{direction: Direction.SUB}> = invertQuotient(quotient)

        const expected = [4, 5] as Quotient<{direction: Direction.SUB}>
        expect(actual).toEqual(expected)
    })

    it("returns the quotient unchanged if it is unison", (): void => {
        const quotient = [4.5, 4.5] as Quotient<{direction: Direction.UNISON}>

        const actual: Quotient<{direction: Direction.UNISON}> = invertQuotient(quotient)

        const expected = [4.5, 4.5] as Quotient<{direction: Direction.UNISON}>
        expect(actual).toEqual(expected)
    })

    it("returns the super equivalent of the quotient if it is sub", (): void => {
        const quotient = [4, 5] as Quotient<{direction: Direction.SUB}>

        const actual: Quotient<{direction: Direction.SUPER}> = invertQuotient(quotient)

        const expected = [5, 4] as Quotient<{direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })
})
