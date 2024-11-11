import { computeDistributions, Count, Distribution, DistributionBin } from "../../../src"

describe("computeDistributions", (): void => {
    it("given an array and a count of bins, will return all the possible ways of distributing the elements across the bins", (): void => {
        const array: string[] = ["a", "b", "c", "d"]
        const binCount = 3 as Count<DistributionBin<string>>

        const actual: Distribution<string>[] = computeDistributions(array, binCount)

        const expected = [
            // 4 0 0
            [["a", "b", "c", "d"], [], []],

            // 3 1 0
            [["a", "b", "c"], ["d"], []],
            [["a", "b", "d"], ["c"], []],
            [["a", "c", "d"], ["b"], []],
            [["b", "c", "d"], ["a"], []],

            // 2 2 0
            [["a", "b"], ["c", "d"], []],
            [["a", "c"], ["b", "d"], []],
            [["a", "d"], ["b", "c"], []],
            [["b", "c"], ["a", "d"], []],
            [["b", "d"], ["a", "c"], []],
            [["c", "d"], ["a", "b"], []],

            // 1 3 0
            [["a"], ["b", "c", "d"], []],
            [["b"], ["a", "c", "d"], []],
            [["c"], ["a", "b", "d"], []],
            [["d"], ["a", "b", "c"], []],

            // 0 4 0
            [[], ["a", "b", "c", "d"], []],

            // 3 0 1
            [["a", "b", "c"], [], ["d"]],
            [["a", "b", "d"], [], ["c"]],
            [["a", "d", "c"], [], ["b"]],
            [["d", "b", "c"], [], ["a"]],

            // 2 0 2
            [["a", "b"], [], ["c", "d"]],
            [["a", "c"], [], ["b", "d"]],
            [["a", "d"], [], ["b", "c"]],
            [["b", "c"], [], ["a", "d"]],
            [["b", "d"], [], ["a", "c"]],
            [["c", "d"], [], ["a", "b"]],

            // 1 0 3
            [["a"], [], ["b", "c", "d"]],
            [["b"], [], ["a", "c", "d"]],
            [["c"], [], ["b", "a", "d"]],
            [["d"], [], ["b", "c", "a"]],

            // 0 0 4
            [[], [], ["a", "b", "c", "d"]],

            // 0 3 1
            [[], ["b", "c", "d"], ["a"]],
            [[], ["a", "c", "d"], ["b"]],
            [[], ["b", "a", "d"], ["c"]],
            [[], ["b", "c", "a"], ["d"]],

            // 0 2 2
            [[], ["a", "b"], ["c", "d"]],
            [[], ["a", "c"], ["b", "d"]],
            [[], ["a", "d"], ["b", "c"]],
            [[], ["b", "c"], ["a", "d"]],
            [[], ["b", "d"], ["a", "c"]],
            [[], ["c", "d"], ["a", "b"]],

            // 0 1 3
            [[], ["a"], ["b", "c", "d"]],
            [[], ["b"], ["a", "c", "d"]],
            [[], ["c"], ["b", "a", "d"]],
            [[], ["d"], ["b", "c", "a"]],

            // 2 1 1
            [["a", "b"], ["c"], ["d"]],
            [["a", "b"], ["d"], ["c"]],
            [["a", "c"], ["b"], ["d"]],
            [["a", "c"], ["d"], ["b"]],
            [["a", "d"], ["b"], ["c"]],
            [["a", "d"], ["c"], ["b"]],
            [["b", "c"], ["a"], ["d"]],
            [["b", "c"], ["d"], ["a"]],
            [["b", "d"], ["a"], ["c"]],
            [["b", "d"], ["c"], ["a"]],
            [["c", "d"], ["a"], ["b"]],
            [["c", "d"], ["b"], ["a"]],

            // 1 2 1
            [["c"], ["a", "b"], ["d"]],
            [["d"], ["a", "b"], ["c"]],
            [["b"], ["a", "c"], ["d"]],
            [["d"], ["a", "c"], ["b"]],
            [["b"], ["a", "d"], ["c"]],
            [["c"], ["a", "d"], ["b"]],
            [["a"], ["b", "c"], ["d"]],
            [["d"], ["b", "c"], ["a"]],
            [["a"], ["b", "d"], ["c"]],
            [["c"], ["b", "d"], ["a"]],
            [["a"], ["c", "d"], ["b"]],
            [["b"], ["c", "d"], ["a"]],

            // 1 1 2
            [["c"], ["d"], ["a", "b"]],
            [["d"], ["c"], ["a", "b"]],
            [["b"], ["d"], ["a", "c"]],
            [["d"], ["b"], ["a", "c"]],
            [["b"], ["c"], ["a", "d"]],
            [["c"], ["b"], ["a", "d"]],
            [["a"], ["d"], ["b", "c"]],
            [["d"], ["a"], ["b", "c"]],
            [["a"], ["c"], ["b", "d"]],
            [["c"], ["a"], ["b", "d"]],
            [["a"], ["b"], ["c", "d"]],
            [["b"], ["a"], ["c", "d"]],
        ] as Distribution<string>[]

        expect(actual).toBeSameDistributionsAs(expected)
    })

    it("works for 1 element across two bins", (): void => {
        const array = ["a"]
        const binCount = 2 as Count<DistributionBin<string>>

        const actual = computeDistributions(array, binCount)

        expect(actual.length).toBe(2)
        const expected: Distribution<string>[] = [
            [["a"], []],
            [[], ["a"]],
        ] as Distribution<string>[]
        expect(actual).toEqual(expected)
    })
})
