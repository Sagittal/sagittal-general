import {Count} from "../../types"
import {FormatTableOptions, Row} from "./types"

const DEFAULT_FORMAT_TABLE_OPTIONS: FormatTableOptions<unknown> = {
    tableAlignment: undefined,
    colors: undefined,
    headerRowCount: 1 as Count<Row<{of: unknown, header: true}>>,
}

const MERGED_CELL_INDICATOR = "⤝"                               // Canadian syllabics chi sign

export {
    DEFAULT_FORMAT_TABLE_OPTIONS,
    MERGED_CELL_INDICATOR,
}
