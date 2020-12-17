import {computeDeepDistinct, Maybe} from "../../../code"
import {Formatted, Io, ioSettings, Row, Table, TableFormat} from "../../../io"
import {count} from "../../../math"
import {Count} from "../../../types"
import {formatTableForForum} from "./tableForForum"
import {formatTableForSpreadsheet} from "./tableForSpreadsheet"
import {formatTableForTerminal} from "./tableForTerminal"
import {FormatTableOptions} from "./types"

const formatTableFromScript = <T>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
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
        case TableFormat.SPREADSHEET:
            return formatTableForSpreadsheet(table, options)
        case TableFormat.TERMINAL:
        default:
            return formatTableForTerminal(table, options)
    }
}

export {
    formatTableFromScript,
}
