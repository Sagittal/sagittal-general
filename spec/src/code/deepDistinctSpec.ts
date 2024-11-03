import { computeDeepDistinct } from "../../../src"

describe("computeDeepDistinct", (): void => {
    it("removes duplicate objects from the array", (): void => {
        const array = [{ a: 1 }, { a: 1 }, { a: 0 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 2 }]

        const actual = computeDeepDistinct(array)

        const expected = [{ a: 1 }, { a: 0 }, { a: 2 }, { a: 3 }, { a: 4 }]
        expect(actual).toEqual(expected)
    })
})
