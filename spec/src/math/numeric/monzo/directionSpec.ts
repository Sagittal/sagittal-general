import {
    computeSuperMonzo,
    Direction,
    EMPTY_MONZO,
    invertMonzo,
    isMonzoSub,
    isMonzoSuper,
    Monzo,
} from "../../../../../src"
import {isMonzoUnison} from "../../../../../src/math"

describe("isMonzoSub", (): void => {
    it("returns false if the monzo is super", (): void => {
        const monzo = [-1, 1] as Monzo      // 3/2 = 1.5 > 1

        const actual = isMonzoSub(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is sub", (): void => {
        const monzo = [1, -1] as Monzo      // 2/3 = 0.667 < 1

        const actual = isMonzoSub(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is empty (and therefore neither super nor sub)", (): void => {
        const actual = isMonzoSub(EMPTY_MONZO)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo represents a huge number", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo

        const actual = isMonzoSub(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo represents a tiny number", (): void => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Monzo

        const actual = isMonzoSub(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo represents a huge number", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Monzo

        const actual = isMonzoSub(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle another situation where a monzo represents a tiny number", (): void => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Monzo

        const actual = isMonzoSub(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo is really huge for both the numerator and denominator", (): void => {
        const monzo = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Monzo

        const actual = isMonzoSub(monzo)

        expect(actual).toBeTruthy()
    })
})

describe("isMonzoSuper", (): void => {
    it("works the opposite from isMonzoSub (except the unison, which is also false)", (): void => {
        expect(isMonzoSuper([-1, 1] as Monzo)).toBeTruthy()
        expect(isMonzoSuper([1, -1] as Monzo)).toBeFalsy()
        expect(isMonzoSuper([] as Monzo)).toBeFalsy()
        expect(isMonzoSuper([0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo)).toBeTruthy()
        expect(isMonzoSuper([0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Monzo)).toBeFalsy()
        expect(isMonzoSuper([0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Monzo)).toBeTruthy()
        expect(isMonzoSuper([0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Monzo)).toBeFalsy()
    })
})

describe("isMonzoUnison", (): void => {
    it("returns false if the monzo is super", (): void => {
        const monzo = [-1, 1] as Monzo      // 3/2 = 1.5 > 1

        const actual = isMonzoUnison(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is empty (and therefore neither super nor sub)", (): void => {
        const actual = isMonzoUnison(EMPTY_MONZO)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is sub", (): void => {
        const monzo = [1, -1] as Monzo      // 2/3 = 0.667 < 1

        const actual = isMonzoUnison(monzo)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperMonzo", (): void => {
    it("returns the monzo if it is already super", (): void => {
        const monzo = [0, 0, 0, 0, 2] as Monzo<{direction: Direction.SUPER}>

        const actual: Monzo<{direction: Direction.SUPER}> = computeSuperMonzo(monzo)

        expect(actual).toEqual(monzo)
    })

    it("returns the reciprocal of the monzo if it is not already super", (): void => {
        const monzo = [0, 0, 0, 1, -2] as Monzo<{direction: Direction.SUB}>     // 7/121 = 0.0579 < 1

        const actual: Monzo<{direction: Direction.SUPER}> = computeSuperMonzo(monzo)

        const expected = [0, 0, 0, -1, 2] as Monzo<{direction: Direction.SUPER}>  // 121/7 = 17.286 > 1
        expect(actual).toEqual(expected)
    })

    it("returns the monzo unchanged if it the empty monzo", (): void => {
        const monzo = EMPTY_MONZO as Monzo<{direction: Direction.UNISON}>

        const actual: Monzo<{direction: Direction.UNISON}> = computeSuperMonzo(monzo)

        expect(actual).toEqual(EMPTY_MONZO)
    })
})

describe("invertMonzo", (): void => {
    it("returns the inverted (negated) version of the monzo", (): void => {
        const monzo = [4, 0, -1, 1] as Monzo<{direction: Direction.SUPER}> // 112/5

        const actual: Monzo<{direction: Direction.SUB}> = invertMonzo(monzo)

        const expected = [-4, 0, 1, -1] as Monzo<{direction: Direction.SUB}> // 5/112
        expect(actual).toEqual(expected)
    })

    it("works for sub monzos", (): void => {
        const monzo = [0, 0, -3] as Monzo<{direction: Direction.SUB}>

        const actual: Monzo<{direction: Direction.SUPER}> = invertMonzo(monzo)

        const expected = [0, 0, 3] as Monzo<{direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("works for the unison monzo (the empty monzo)", (): void => {
        const monzo = EMPTY_MONZO as Monzo<{direction: Direction.UNISON}>

        const actual: Monzo<{direction: Direction.UNISON}> = invertMonzo(monzo)

        expect(actual).toEqual(EMPTY_MONZO)
    })
})
