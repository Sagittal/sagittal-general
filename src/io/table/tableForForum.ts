import {isUndefined, Maybe} from "../../code"
import {BLANK, NEWLINE} from "../constants"
import {join, sumTexts} from "../typedOperations"
import {ColorMethod, Io} from "../types"
import {computeColumnAlignments} from "./alignment"
import {computeColumnRange} from "./columnRange"
import {computeColumnSpans} from "./columnSpans"
import {DEFAULT_FORMAT_TABLE_OPTIONS} from "./constants"
import {Alignment, Cell, FormatTableOptions, Row, Table} from "./types"

const computeMaybeColoredCell = <T>(cell: Cell<{of: T}>, color: Maybe<ColorMethod>): Io =>
    isUndefined(color) ? (cell || BLANK) : `[hilite=${color}]${cell}[/hilite]`

const formatTableForForum = <T>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        tableAlignment = DEFAULT_FORMAT_TABLE_OPTIONS.tableAlignment,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const columnAlignments = computeColumnAlignments(tableAlignment, columnRange)

    const formattedRows: Io[] = table.map((row: Row<{of: T}>, rowIndex: number): Io => {
        const isHeader = rowIndex < headerRowCount
        const color = colors ? colors[rowIndex] : undefined

        const spans = computeColumnSpans(row)

        const rowText = row.reduce(
            (alignedRow: Io, cell: Cell<{of: T}>, cellIndex: number): Io => {
                const columnSpan = spans[cellIndex]
                if (columnSpan === 0) return alignedRow
                const isMergedCell = columnSpan > 1
                const cellSpan = isMergedCell ? `=${columnSpan}` : BLANK

                const columnAlignment = columnAlignments[cellIndex]
                const maybeColoredCell = isUndefined(cell) ? BLANK : computeMaybeColoredCell(cell, color)
                const cellTag = isHeader ?
                    isMergedCell ? "th" :
                        columnAlignment === Alignment.LEFT ?
                            "thl" :
                            columnAlignment === Alignment.RIGHT ? "thr" : "th" :
                    isMergedCell ? "td" :
                        columnAlignment === Alignment.CENTER ?
                            "tdc" :
                            columnAlignment === Alignment.RIGHT ? "tdr" : "td"

                const alignedCell = `[${cellTag}${cellSpan}]${maybeColoredCell}[/${cellTag}]`

                return sumTexts(alignedRow, alignedCell as Io)
            },
            BLANK,
        )

        return sumTexts("[tr]" as Io, rowText, "[/tr]" as Io)
    })

    formattedRows.unshift("[table]" as Io)
    formattedRows.push("[/table]" as Io)

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return sumTexts(formattedTable, NEWLINE)
}

export {
    formatTableForForum,
}
