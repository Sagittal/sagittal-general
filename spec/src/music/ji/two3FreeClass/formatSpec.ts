import {format23FreeClass, Formatted, ioSettings, TableFormat, Two3FreeClass} from "../../../../../src"

describe("format23FreeClass", (): void => {
    it("gives the name of the 2,3-free class when formatting for the terminal", (): void => {
        const two3FreeClass = {pev: [0, 0, -1, 0, 1]} as Two3FreeClass

        ioSettings.tableFormat = TableFormat.TERMINAL
        const actual = format23FreeClass(two3FreeClass)

        const expected = "{11/5}₂,₃" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("same when formatting for spreadsheets", (): void => {
        const two3FreeClass = {pev: [0, 0, -1, 0, 1]} as Two3FreeClass

        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = format23FreeClass(two3FreeClass)

        const expected = "{11/5}₂,₃" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("uses the LaTeX bbCode when formatting for the forum, and needs to cancel the pre tags in order for it to display properly", (): void => {
        const two3FreeClass = {pev: [0, 0, -1, 0, 1]} as Two3FreeClass

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = format23FreeClass(two3FreeClass)

        const expected = "[latex]\\{\\frac{11}{5}\\}_{\\scriptsize{2,3}}[/latex]" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("can drop the denominator of 1 when formatting for the forum", (): void => {
        const two3FreeClass = {pev: [0, 0, 0, 1, 1]} as Two3FreeClass

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = format23FreeClass(two3FreeClass)

        const expected = "[latex]\\{77\\}_{\\scriptsize{2,3}}[/latex]" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })
})
