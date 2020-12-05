import {Column, Row} from "../../../../src"
import {computeHeaderRowsFromFieldTitleColumns} from "../../../../src/io/table/headerRowsFromFieldTitleColumns"

describe("computeHeaderRowsFromFieldTitleColumns", (): void => {
    const fieldTitleColumns = [
        [
            "bound",
            "index",
        ],
        [
            "initial",
            "comma",
            "mean",
            "pos (¢)",
        ],
    ] as Array<Column<{of: string, header: true}>>

    it("takes field titles which are long enough that they should be split across multiple header rows; they are already in the form of mini-columns, but this re-slices-and-dices them into header rows", (): void => {
        const actual = computeHeaderRowsFromFieldTitleColumns(fieldTitleColumns)

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
        ] as Array<Row<{of: string, header: true}>>
        expect(actual).toEqual(expected)
    })

    it("can include a spacer row", (): void => {
        const actual = computeHeaderRowsFromFieldTitleColumns(fieldTitleColumns, {includeSpacerRow: true})

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
            ["", ""],
        ] as Array<Row<{of: string, header: true}>>
        expect(actual).toEqual(expected)
    })

    it("doesn't crash when there are no field title columns", (): void => {
        const fieldTitleColumns = [] as Array<Column<{of: string, header: true}>>

        const actual = computeHeaderRowsFromFieldTitleColumns(fieldTitleColumns)

        const expected = [] as Array<Row<{of: string, header: true}>>
        expect(actual).toEqual(expected)
    })
})
