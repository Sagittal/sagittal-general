import {indexOfFinalElement} from "../../../code"
import {
    alignCellIo,
    BLANK,
    Cell,
    computeColumnAlignments,
    computeColumnRange,
    computeColumnWidths,
    Io,
    join,
    NEWLINE,
    Row,
    sumTexts,
    TAB,
    Table,
} from "../../../io"
import {colorize} from "../../colorize"
import {ColorMethod} from "../types"
import {DEFAULT_FORMAT_TABLE_OPTIONS} from "./constants"
import {maybeColorize} from "./maybeColorize"
import {FormatTableOptions} from "./types"

const formatTableForTerminal = <T>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        tableAlignment = DEFAULT_FORMAT_TABLE_OPTIONS.tableAlignment,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const columnAlignments = computeColumnAlignments(tableAlignment, columnRange)

    const columnWidths = computeColumnWidths(table, columnRange)

    const formattedRows = table.map((row: Row<{of: T}>, rowIndex: number): Io => {
        const rowText = row.reduce(
            (alignedRow: Io, cell: Cell<{of: T}>, cellIndex: number): Io => {
                const columnWidth = columnWidths[cellIndex]
                const columnAlignment = columnAlignments[cellIndex]

                const alignedCell = alignCellIo(cell, {columnWidth, columnAlignment})

                const maybeSeparator = cellIndex === indexOfFinalElement(row) ? BLANK : TAB

                return sumTexts(alignedRow, alignedCell, maybeSeparator)
            },
            BLANK,
        )

        const maybeColoredRowIo: Io = maybeColorize(rowText, rowIndex, colors)
        if (rowIndex === headerRowCount - 1) {
            return colorize(maybeColoredRowIo, "underline" as ColorMethod)
        }

        return maybeColoredRowIo
    })

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return sumTexts(formattedTable, NEWLINE)
}

export {
    formatTableForTerminal,
}
