import { computeSuperQuotient } from "../../../../../src"
import { Super } from "../../../../../src/math"
import {
    Denominator,
    invertQuotient,
    isQuotientSub,
    isQuotientSuper,
    isQuotientUnison,
    Numerator,
    Quotient,
} from "../../../../../src/math/numeric/quotient"
import { Sub, Unison } from "../../../../../src/math/numeric/types"

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
    const expected = [5, 4] as Quotient<Super>

    it("returns the quotient unchanged if the numerator is already greater than the denominator", (): void => {
        const quotient = [5, 4] as Quotient<Super>

        const actual: Quotient<Super> = computeSuperQuotient(quotient)

        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the quotient if the numerator is lesser than the denominator", (): void => {
        const quotient = [4, 5] as Quotient<Sub>

        const actual: Quotient<Super> = computeSuperQuotient(quotient)

        expect(actual).toEqual(expected)
    })

    it("returns the quotient unchanged if the numerator is equal to the denominator", (): void => {
        const quotient = [4.5, 4.5] as Quotient<Unison>

        const actual: Quotient<Unison> = computeSuperQuotient(quotient)

        expect(actual).toEqual(quotient)
    })
})

describe("invertQuotient", (): void => {
    it("returns the sub equivalent of the quotient if it is super", (): void => {
        const quotient = [5, 4] as Quotient<Super>

        const actual: Quotient<Sub> = invertQuotient(quotient)

        const expected = [4, 5] as Quotient<Sub>
        expect(actual).toEqual(expected)
    })

    it("returns the quotient unchanged if it is unison", (): void => {
        const quotient = [4.5, 4.5] as Quotient<Unison>

        const actual: Quotient<Unison> = invertQuotient(quotient)

        const expected = [4.5, 4.5] as Quotient<Unison>
        expect(actual).toEqual(expected)
    })

    it("returns the super equivalent of the quotient if it is sub", (): void => {
        const quotient = [4, 5] as Quotient<Sub>

        const actual: Quotient<Super> = invertQuotient(quotient)

        const expected = [5, 4] as Quotient<Super>
        expect(actual).toEqual(expected)
    })
})
