import { formatTableFromScript, Table } from "../../../../../src"

describe("table", (): void => {
    it("throws an error if the rows do not all have the same length", (): void => {
        const table = [
            ["id", "name"],
            ["1 ", "jim ", "45"],
        ] as Table

        expect((): void => {
            formatTableFromScript(table)
        }).toThrowError("Table does not have rows with all the same lengths. Row lengths are 2,3.")
    })
})
