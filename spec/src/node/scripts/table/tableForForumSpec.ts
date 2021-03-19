// tslint:disable max-line-length

import {Alignment, Count, Io, MERGED_CELL_INDICATOR, NEWLINE, Row, Table} from "../../../../../src"
import {formatTableForForum} from "../../../../../src/node/scripts/table/tableForForum"

describe("formatTableForForum", (): void => {
    it("formats a table to be posted on the Sagittal forum", (): void => {
        const table = [
            ["comma name", "prime limit", "2,3-free SoPFR", "cents", "pev", "quotient", "apotome slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table)

        let expected =
            "[table]" + NEWLINE +
            "[tr][th]comma name[/th][th]prime limit[/th][th]2,3-free SoPFR[/th][th]cents[/th][th]pev[/th][th]quotient[/th][th]apotome slope[/th][th]N2D3P9[/th][/tr]" + NEWLINE +
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]" + NEWLINE +
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports a custom count of header rows", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "SoPFR", "cents", "pev", "quotient", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, {headerRowCount: 2 as Count<Row<{of: string, header: true}>>})

        let expected =
            "[table]" + NEWLINE +
            "[tr][th]comma[/th][th]prime[/th][th]2,3-free[/th][th][/th][th][/th][th][/th][th]apotome[/th][th][/th][/tr]" + NEWLINE +
            "[tr][th]name[/th][th]limit[/th][th]SoPFR[/th][th]cents[/th][th]pev[/th][th]quotient[/th][th]slope[/th][th]N2D3P9[/th][/tr]" + NEWLINE +     // Note the second header row!
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]" + NEWLINE +
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports colors per row", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "SoPFR", "cents", "pev", "quotient", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, {colors: ["yellow", "red", "blue", "cyan"]})

        let expected =
            "[table]" + NEWLINE +
            "[tr][th][hilite=yellow]comma[/hilite][/th][th][hilite=yellow]prime[/hilite][/th][th][hilite=yellow]2,3-free[/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow]apotome[/hilite][/th][th][hilite=yellow][/hilite][/th][/tr]" + NEWLINE +
            "[tr][td][hilite=red]name[/hilite][/td][td][hilite=red]limit[/hilite][/td][td][hilite=red]SoPFR[/hilite][/td][td][hilite=red]cents[/hilite][/td][td][hilite=red]pev[/hilite][/td][td][hilite=red]quotient[/hilite][/td][td][hilite=red]slope[/hilite][/td][td][hilite=red]N2D3P9[/hilite][/td][/tr]" + NEWLINE +
            "[tr][td][hilite=blue]11M[/hilite][/td][td][hilite=blue]11[/hilite][/td][td][hilite=blue]11[/hilite][/td][td][hilite=blue]45.45[/hilite][/td][td][hilite=blue][0 0 1⟩[/hilite][/td][td][hilite=blue]33/32[/hilite][/td][td][hilite=blue]-4[/hilite][/td][td][hilite=blue]6.722[/hilite][/td][/tr]" + NEWLINE +
            "[tr][td][hilite=cyan]25/49M[/hilite][/td][td][hilite=cyan]7[/hilite][/td][td][hilite=cyan]24[/hilite][/td][td][hilite=cyan]33.4[/hilite][/td][td][hilite=cyan][0 0⟩[/hilite][/td][td][hilite=cyan]50/49[/hilite][/td][td][hilite=cyan]-59.333[/hilite][/td][td][hilite=cyan]26.466[/hilite][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports alignment", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "SoPFR", "cents", "pev", "quotient", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, {
            headerRowCount: 2 as Count<Row<{of: Io, header: true}>>,
            tableAlignment: [Alignment.RIGHT, Alignment.CENTER, Alignment.LEFT],
        })

        let expected =
            "[table]" + NEWLINE +
            "[tr][thr]comma[/thr][th]prime[/th][thl]2,3-free[/thl][th][/th][th][/th][th][/th][th]apotome[/th][th][/th][/tr]" + NEWLINE +
            "[tr][thr]name[/thr][th]limit[/th][thl]SoPFR[/thl][th]cents[/th][th]pev[/th][th]quotient[/th][th]slope[/th][th]N2D3P9[/th][/tr]" + NEWLINE +
            "[tr][tdr]11M[/tdr][tdc]11[/tdc][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]" + NEWLINE +
            "[tr][tdr]25/49M[/tdr][tdc]7[/tdc][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports undefined cells, rendering them as blank", (): void => {
        const table = [
            ["id", "name", "nmm", "thing"],
            ["1", "jim", "45", "barb"],
            ["2", "bob", undefined, "spot"],
            ["2", "bo", "9999", "jet"],
        ] as Table

        const actual = formatTableForForum(table)

        const expected =
            "[table]" + NEWLINE +
            "[tr][th]id[/th][th]name[/th][th]nmm[/th][th]thing[/th][/tr]" + NEWLINE +
            "[tr][td]1[/td][td]jim[/td][td]45[/td][td]barb[/td][/tr]" + NEWLINE +
            "[tr][td]2[/td][td]bob[/td][td][/td][td]spot[/td][/tr]" + NEWLINE +
            "[tr][td]2[/td][td]bo[/td][td]9999[/td][td]jet[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports merged cells (but it negates their alignment, because to do the most basic stuff that's how it's got to be)", (): void => {
        const table = [
            ["id", "name", MERGED_CELL_INDICATOR, "thing"],
            ["1", "jim", "45", "barb"],
            ["2", "bob", undefined, "spot"],
            ["2", "bo", "9999", "jet"],
        ] as Table

        const actual = formatTableForForum(table, {tableAlignment: [undefined, Alignment.LEFT, Alignment.RIGHT]})

        const expected =
            "[table]" + NEWLINE +
            "[tr][th]id[/th][th=2]name[/th][th]thing[/th][/tr]" + NEWLINE +
            "[tr][td]1[/td][td]jim[/td][tdr]45[/tdr][td]barb[/td][/tr]" + NEWLINE +
            "[tr][td]2[/td][td]bob[/td][tdr][/tdr][td]spot[/td][/tr]" + NEWLINE +
            "[tr][td]2[/td][td]bo[/td][tdr]9999[/tdr][td]jet[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
