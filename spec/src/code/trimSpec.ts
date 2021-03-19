import {computeTrimmedArray} from "../../../src"

describe("computeTrimmedArray", (): void => {
    it("removes trailing falsy elements from the pev", (): void => {
        const array = [4, -5, undefined, undefined, undefined]

        const actual = computeTrimmedArray(array)

        const expected = [4, -5]
        expect(actual).toEqual(expected)
    })

    it("works for zeroes", (): void => {
        const array = [4, -5, 0, 0, 0]

        const actual = computeTrimmedArray(array)

        const expected = [4, -5]
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original pev", (): void => {
        const array = [4, -5, 0, 0, 0]

        computeTrimmedArray(array)

        const expected = [4, -5, 0, 0, 0]
        expect(array).toEqual(expected)
    })

    it("doesn't crash if given an empty array", (): void => {
        const array: unknown[] = []

        const actual = computeTrimmedArray(array)

        expect(actual).toEqual(array)
    })

    it("doesn't crash if given an array which will be trimmed to the point of emptiness", (): void => {
        const array: unknown[] = [undefined, 0, undefined]

        const actual = computeTrimmedArray(array)

        const expected: unknown[] = []
        expect(actual).toEqual(expected)
    })
})
