import {Maybe} from "../../code"
import {Count} from "../../types"
import {Formatted} from "../format"
import {Char, ColorMethod} from "../types"

enum Alignment {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type TableAlignment = Maybe<Alignment> | Array<Maybe<Alignment>>

type TableProperties = Partial<{
    of: unknown,
    header: boolean,
}>

type Cell<T extends TableProperties = {}> = Maybe<Formatted<T["of"]>>
type Row<T extends TableProperties = {}> =
    Array<Cell<T>>
    & {_RowBrand: boolean}
    & (T extends {of: unknown} ? {_RowOfBrand: T["of"]} : {_RowOfBrand: unknown})
    & (T extends {header: true} ? {_HeaderBrand: boolean} : {})
type Column<T extends TableProperties = {}> =
    Array<Cell<T>>
    & {_ColumnBrand: boolean}
    & (T extends {of: unknown} ? {_ColumnOfBrand: T["of"]} : {_ColumnOfBrand: unknown})
    & (T extends {header: true} ? {_HeaderBrand: boolean} : {})

type Table<T = void> = Array<Row<{of: T}>>

interface AlignedCellOptions {
    columnAlignment: Maybe<Alignment>,
    columnWidth: Count<Char>,
}

type FormatTableOptions<T> = {
    tableAlignment: TableAlignment,
    colors: Maybe<Array<Maybe<ColorMethod>>>,
    headerRowCount: Count<Row<{of: T, header: true}>>,
}

enum TableFormat {
    FORUM = "forum",
    FORUM_WITH_SPLIT_QUOTIENTS = "forumWithSplitQuotients",
    TERMINAL = "terminal",
    SPREADSHEET = "spreadsheet",
}

export {
    Alignment,
    TableAlignment,
    AlignedCellOptions,
    FormatTableOptions,
    Cell,
    Row,
    Column,
    Table,
    TableFormat,
}
