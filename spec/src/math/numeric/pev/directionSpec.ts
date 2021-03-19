import {
    computeSuperPev,
    Direction,
    EMPTY_PEV,
    invertPev,
    isPevSub,
    isPevSuper,
    Pev,
} from "../../../../../src"
import {isPevUnison} from "../../../../../src/math"

describe("isPevSub", (): void => {
    it("returns false if the pev is super", (): void => {
        const pev = [-1, 1] as Pev      // 3/2 = 1.5 > 1

        const actual = isPevSub(pev)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pev is sub", (): void => {
        const pev = [1, -1] as Pev      // 2/3 = 0.667 < 1

        const actual = isPevSub(pev)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pev is empty (and therefore neither super nor sub)", (): void => {
        const actual = isPevSub(EMPTY_PEV)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a pev represents a huge number", (): void => {
        const pev = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Pev

        const actual = isPevSub(pev)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a pev represents a tiny number", (): void => {
        const pev = [0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Pev

        const actual = isPevSub(pev)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a pev represents a huge number", (): void => {
        const pev = [0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Pev

        const actual = isPevSub(pev)

        expect(actual).toBeFalsy()
    })

    it("can handle another situation where a pev represents a tiny number", (): void => {
        const pev = [0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Pev

        const actual = isPevSub(pev)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a pev is really huge for both the numerator and denominator", (): void => {
        const pev = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Pev

        const actual = isPevSub(pev)

        expect(actual).toBeTruthy()
    })
})

describe("isPevSuper", (): void => {
    it("works the opposite from isPevSub (except the unison, which is also false)", (): void => {
        expect(isPevSuper([-1, 1] as Pev)).toBeTruthy()
        expect(isPevSuper([1, -1] as Pev)).toBeFalsy()
        expect(isPevSuper([] as Pev)).toBeFalsy()
        expect(isPevSuper([0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Pev)).toBeTruthy()
        expect(isPevSuper([0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Pev)).toBeFalsy()
        expect(isPevSuper([0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Pev)).toBeTruthy()
        expect(isPevSuper([0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Pev)).toBeFalsy()
    })
})

describe("isPevUnison", (): void => {
    it("returns false if the pev is super", (): void => {
        const pev = [-1, 1] as Pev      // 3/2 = 1.5 > 1

        const actual = isPevUnison(pev)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pev is empty (and therefore neither super nor sub)", (): void => {
        const actual = isPevUnison(EMPTY_PEV)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pev is sub", (): void => {
        const pev = [1, -1] as Pev      // 2/3 = 0.667 < 1

        const actual = isPevUnison(pev)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperPev", (): void => {
    it("returns the pev if it is already super", (): void => {
        const pev = [0, 0, 0, 0, 2] as Pev<{direction: Direction.SUPER}>

        const actual: Pev<{direction: Direction.SUPER}> = computeSuperPev(pev)

        expect(actual).toEqual(pev)
    })

    it("returns the reciprocal of the pev if it is not already super", (): void => {
        const pev = [0, 0, 0, 1, -2] as Pev<{direction: Direction.SUB}>     // 7/121 = 0.0579 < 1

        const actual: Pev<{direction: Direction.SUPER}> = computeSuperPev(pev)

        const expected = [0, 0, 0, -1, 2] as Pev<{direction: Direction.SUPER}>  // 121/7 = 17.286 > 1
        expect(actual).toEqual(expected)
    })

    it("returns the pev unchanged if it the empty pev", (): void => {
        const pev = EMPTY_PEV as Pev<{direction: Direction.UNISON}>

        const actual: Pev<{direction: Direction.UNISON}> = computeSuperPev(pev)

        expect(actual).toEqual(EMPTY_PEV)
    })
})

describe("invertPev", (): void => {
    it("returns the inverted (negated) version of the pev", (): void => {
        const pev = [4, 0, -1, 1] as Pev<{direction: Direction.SUPER}> // 112/5

        const actual: Pev<{direction: Direction.SUB}> = invertPev(pev)

        const expected = [-4, 0, 1, -1] as Pev<{direction: Direction.SUB}> // 5/112
        expect(actual).toEqual(expected)
    })

    it("works for sub pevs", (): void => {
        const pev = [0, 0, -3] as Pev<{direction: Direction.SUB}>

        const actual: Pev<{direction: Direction.SUPER}> = invertPev(pev)

        const expected = [0, 0, 3] as Pev<{direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("works for the unison pev (the empty pev)", (): void => {
        const pev = EMPTY_PEV as Pev<{direction: Direction.UNISON}>

        const actual: Pev<{direction: Direction.UNISON}> = invertPev(pev)

        expect(actual).toEqual(EMPTY_PEV)
    })
})
