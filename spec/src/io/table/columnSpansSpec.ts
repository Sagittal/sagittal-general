import { Cell, Count, MERGED_CELL_INDICATOR, Row, sum } from "../../../../src"
import { computeColumnSpans } from "../../../../src/io"

describe("computeColumnSpans", (): void => {
    const row = [
        "quotient",
        "vector",
        MERGED_CELL_INDICATOR,
        MERGED_CELL_INDICATOR,
        MERGED_CELL_INDICATOR,
        MERGED_CELL_INDICATOR,
        "",
        "apotome",
    ] as Row

    it("computes the count of columns each cell should span based on which ones request to be merged with their neighbor to the left", (): void => {
        const actual = computeColumnSpans(row)

        const expected = [1, 5, 0, 0, 0, 0, 1, 1] as Count<Cell>[]
        expect(actual).toEqual(expected)
    })

    it("the total count of columns should match the length of the array", (): void => {
        const actual = computeColumnSpans(row)

        const expected = sum(...actual)
        expect(actual.length).toEqual(expected)
    })
})
