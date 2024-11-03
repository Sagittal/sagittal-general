import { Maybe } from "../../../code"
import { Row, TableAlignment } from "../../../io"
import { Count } from "../../../types"
import { ColorMethod } from "../types"

type FormatTableOptions<T> = {
    tableAlignment: TableAlignment
    colors: Maybe<Array<Maybe<ColorMethod>>>
    headerRowCount: Count<Row<{ of: T; header: true }>>
}

export { FormatTableOptions }
