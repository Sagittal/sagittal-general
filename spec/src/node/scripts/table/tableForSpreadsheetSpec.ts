import {Io, NEWLINE, Table} from "../../../../../src"
import {formatTableForSpreadsheet} from "../../../../../src/node/scripts/table/tableForSpreadsheet"

describe("formatTableForSpreadsheet", (): void => {
    const table = [
        ["comma name", "prime limit", "2,3-free SoPFR", "cents", "monzo", "quotient", "apotome slope"],
        ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4"],
        ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333"],
    ] as Table<Io>

    it("makes each column such that each of its cells has the same width", (): void => {
        const actual = formatTableForSpreadsheet(table)

        const expected =
            "comma name\tprime limit\t2,3-free SoPFR\tcents\tmonzo\tquotient\tapotome slope".underline + NEWLINE +
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4" + NEWLINE +
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
