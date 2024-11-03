import { Combinations, computeCombinations, Count } from "../../../src"

describe("computeCombinations", (): void => {
    const set = ["a", "b", "c", "d"]
    it("given a set, will return all combinations of it with the specified count of elements", (): void => {
        const count = 2 as Count<string>

        const actual = computeCombinations(set, count)

        const expected = [
            ["a", "b"],
            ["a", "c"],
            ["a", "d"],
            ["b", "c"],
            ["b", "d"],
            ["c", "d"],
        ] as Combinations<string>
        expect(actual).toBeSameCombinationsAs(expected)
    })

    it("when count is zero, returns an empty array", (): void => {
        const count = 0 as Count<string>

        const actual = computeCombinations(set, count)

        const expected: Combinations<string> = [] as unknown[] as Combinations<string>
        expect(actual).toBeSameCombinationsAs(expected)
    })

    it("works when with repeated elements is true", (): void => {
        const count = 2 as Count<string>

        const actual = computeCombinations(set, count, { withRepeatedElements: true })

        const expected = [
            ["a", "a"],
            ["a", "b"],
            ["a", "c"],
            ["a", "d"],
            ["b", "b"],
            ["b", "c"],
            ["b", "d"],
            ["c", "c"],
            ["c", "d"],
            ["d", "d"],
        ] as Combinations<string>
        expect(actual).toBeSameCombinationsAs(expected)
    })

    it("works for big sets", (): void => {
        const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        const count = 7 as Count<number>

        computeCombinations(set, count, { withRepeatedElements: true })
    })
})
