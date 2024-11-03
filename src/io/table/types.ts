import { Maybe, NoProperties } from "../../code"
import { Count } from "../../types"
import { Formatted } from "../format"
import { Char } from "../types"

enum Alignment {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type TableAlignment = Maybe<Alignment> | Array<Maybe<Alignment>>

type TableProperties =
    | Partial<{
          of: unknown
          header: boolean
      }>
    | NoProperties

type Cell<T extends TableProperties = NoProperties> = Maybe<Formatted<T["of"]>>
type Row<T extends TableProperties = NoProperties> = Array<Cell<T>> & {
    _RowBrand: boolean
} & (T extends {
        of: unknown
    }
        ? { _RowOfBrand: T["of"] }
        : { _RowOfBrand: unknown }) &
    (T extends { header: true } ? { _HeaderBrand: boolean } : unknown)
type Column<T extends TableProperties = NoProperties> = Array<Cell<T>> & {
    _ColumnBrand: boolean
} & (T extends {
        of: unknown
    }
        ? { _ColumnOfBrand: T["of"] }
        : { _ColumnOfBrand: unknown }) &
    (T extends { header: true } ? { _HeaderBrand: boolean } : unknown)

type Table<T = void> = Array<Row<{ of: T }>>

interface AlignedCellOptions {
    columnAlignment: Maybe<Alignment>
    columnWidth: Count<Char>
}

enum TableFormat {
    FORUM = "forum",
    FORUM_WITH_SPLIT_QUOTIENTS = "forumWithSplitQuotients",
    TERMINAL = "terminal",
    SPREADSHEET = "spreadsheet",
    HTML = "html",
}

export { Alignment, TableAlignment, AlignedCellOptions, Cell, Row, Column, Table, TableFormat }
