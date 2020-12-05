import {computeDeepDistinct, Maybe} from "../../code"
import {count} from "../../math"
import {Count} from "../../types"
import {Formatted} from "../format"
import {ioSettings} from "../globals"
import {Io} from "../types"
import {formatTableForForum} from "./tableForForum"
import {formatTableForSpreadsheet} from "./tableForSpreadsheet"
import {formatTableForTerminal} from "./tableForTerminal"
import {FormatTableOptions, Row, Table, TableFormat} from "./types"

const formatTable = <T>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const rowLengths = table.map((row: Row<{of: T}>): Count<Maybe<Formatted<T>>> => {
        return count(row)
    })
    const distinctRowLengths = computeDeepDistinct(rowLengths)

    if (distinctRowLengths.length > 1) {
        throw new Error(`Table does not have rows with all the same lengths. Row lengths are ${rowLengths}.`)
    }

    switch (ioSettings.tableFormat) {
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return formatTableForForum(table, options)
        case TableFormat.TERMINAL:
            return formatTableForTerminal(table, options)
        case TableFormat.SPREADSHEET:
            return formatTableForSpreadsheet(table, options)
    }
}

export {
    formatTable,
}
