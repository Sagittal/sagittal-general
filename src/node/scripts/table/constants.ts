import {Row} from "../../../io"
import {Count} from "../../../types"
import {FormatTableOptions} from "./types"

const DEFAULT_FORMAT_TABLE_OPTIONS: FormatTableOptions<unknown> = {
    tableAlignment: undefined,
    colors: undefined,
    headerRowCount: 1 as Count<Row<{of: unknown, header: true}>>,
}

export {
    DEFAULT_FORMAT_TABLE_OPTIONS,
}
