import {
    computeSuperVector,
    Direction,
    EMPTY_VECTOR,
    invertVector,
    isVectorSub,
    isVectorSuper,
    Vector,
} from "../../../../../src"
import { isVectorUnison } from "../../../../../src/math"

describe("isVectorSub", (): void => {
    it("returns false if the vector is super", (): void => {
        const vector = [-1, 1] as Vector // 3/2 = 1.5 > 1

        const actual = isVectorSub(vector)

        expect(actual).toBeFalsy()
    })

    it("returns true if the vector is sub", (): void => {
        const vector = [1, -1] as Vector // 2/3 = 0.667 < 1

        const actual = isVectorSub(vector)

        expect(actual).toBeTruthy()
    })

    it("returns false if the vector is empty (and therefore neither super nor sub)", (): void => {
        const actual = isVectorSub(EMPTY_VECTOR)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a vector represents a huge number", (): void => {
        const vector = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Vector

        const actual = isVectorSub(vector)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a vector represents a tiny number", (): void => {
        const vector = [0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Vector

        const actual = isVectorSub(vector)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a vector represents a huge number", (): void => {
        const vector = [0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Vector

        const actual = isVectorSub(vector)

        expect(actual).toBeFalsy()
    })

    it("can handle another situation where a vector represents a tiny number", (): void => {
        const vector = [0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Vector

        const actual = isVectorSub(vector)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a vector is really huge for both the numerator and denominator", (): void => {
        const vector = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Vector

        const actual = isVectorSub(vector)

        expect(actual).toBeTruthy()
    })
})

describe("isVectorSuper", (): void => {
    it("works the opposite from isVectorSub (except the unison, which is also false)", (): void => {
        expect(isVectorSuper([-1, 1] as Vector)).toBeTruthy()
        expect(isVectorSuper([1, -1] as Vector)).toBeFalsy()
        expect(isVectorSuper([] as Vector)).toBeFalsy()
        expect(isVectorSuper([0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Vector)).toBeTruthy()
        expect(isVectorSuper([0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Vector)).toBeFalsy()
        expect(isVectorSuper([0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Vector)).toBeTruthy()
        expect(isVectorSuper([0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Vector)).toBeFalsy()
    })
})

describe("isVectorUnison", (): void => {
    it("returns false if the vector is super", (): void => {
        const vector = [-1, 1] as Vector // 3/2 = 1.5 > 1

        const actual = isVectorUnison(vector)

        expect(actual).toBeFalsy()
    })

    it("returns true if the vector is empty (and therefore neither super nor sub)", (): void => {
        const actual = isVectorUnison(EMPTY_VECTOR)

        expect(actual).toBeTruthy()
    })

    it("returns false if the vector is sub", (): void => {
        const vector = [1, -1] as Vector // 2/3 = 0.667 < 1

        const actual = isVectorUnison(vector)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperVector", (): void => {
    it("returns the vector if it is already super", (): void => {
        const vector = [0, 0, 0, 0, 2] as Vector<{ direction: Direction.SUPER }>

        const actual: Vector<{ direction: Direction.SUPER }> = computeSuperVector(vector)

        expect(actual).toEqual(vector)
    })

    it("returns the reciprocal of the vector if it is not already super", (): void => {
        const vector = [0, 0, 0, 1, -2] as Vector<{ direction: Direction.SUB }> // 7/121 = 0.0579 < 1

        const actual: Vector<{ direction: Direction.SUPER }> = computeSuperVector(vector)

        const expected = [0, 0, 0, -1, 2] as Vector<{ direction: Direction.SUPER }> // 121/7 = 17.286 > 1
        expect(actual).toEqual(expected)
    })

    it("returns the vector unchanged if it the empty vector", (): void => {
        const vector = EMPTY_VECTOR as Vector<{ direction: Direction.UNISON }>

        const actual: Vector<{ direction: Direction.UNISON }> = computeSuperVector(vector)

        expect(actual).toEqual(EMPTY_VECTOR)
    })
})

describe("invertVector", (): void => {
    it("returns the inverted (negated) version of the vector", (): void => {
        const vector = [4, 0, -1, 1] as Vector<{ direction: Direction.SUPER }> // 112/5

        const actual: Vector<{ direction: Direction.SUB }> = invertVector(vector)

        const expected = [-4, 0, 1, -1] as Vector<{ direction: Direction.SUB }> // 5/112
        expect(actual).toEqual(expected)
    })

    it("works for sub vectors", (): void => {
        const vector = [0, 0, -3] as Vector<{ direction: Direction.SUB }>

        const actual: Vector<{ direction: Direction.SUPER }> = invertVector(vector)

        const expected = [0, 0, 3] as Vector<{ direction: Direction.SUPER }>
        expect(actual).toEqual(expected)
    })

    it("works for the unison vector (the empty vector)", (): void => {
        const vector = EMPTY_VECTOR as Vector<{ direction: Direction.UNISON }>

        const actual: Vector<{ direction: Direction.UNISON }> = invertVector(vector)

        expect(actual).toEqual(EMPTY_VECTOR)
    })
})
