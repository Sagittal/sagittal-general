import {Count} from "../../../src"
import {computeCardinality} from "../../../src/code"

describe("computeCardinality", (): void => {
    it("returns the cardinality of an array", (): void => {
        const array = [
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
        ]

        const actual = computeCardinality(array)

        const expected = [3, 2, 3] as Count[]
        expect(actual).toEqual(expected)
    })
})
