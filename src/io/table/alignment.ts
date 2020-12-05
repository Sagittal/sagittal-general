import {isString, isUndefined, Maybe, Range} from "../../code"
import {Count} from "../../types"
import {BLANK} from "../constants"
import {length} from "../typedOperations"
import {Char, Io} from "../types"
import {AlignedCellOptions, Alignment, Row, Table, TableAlignment} from "./types"

const computeColumnAlignments = (tableAlignment: TableAlignment, columnRange: Range): Array<Maybe<Alignment>> =>
    isUndefined(tableAlignment) ?
        columnRange.map((_: number): undefined => undefined) :
        isString(tableAlignment) ?
            columnRange.map((_: number): Alignment => tableAlignment) :
            columnRange.map((index: number): Maybe<Alignment> => tableAlignment[index])

const computeColumnWidths = <T>(table: Table<T>, columnRange: Range): Array<Count<Char>> =>
    columnRange.map((columnIndex: number): Count<Char> => {
        return table.reduce(
            (columnWidth: Count<Char>, row: Row<{of: T}>): Count<Char> => {
                const columnCell = row[columnIndex]
                const cellWidth = isUndefined(columnCell) || columnCell.includes("[/latex]") ?
                    0 as Count<Char> :
                    length(columnCell)
                if (cellWidth > columnWidth) {
                    columnWidth = cellWidth
                }

                return columnWidth
            },
            0 as Count<Char>,
        )
    })

const furtherAlignCellIo = (alignedCellIo: Io, columnAlignment: Maybe<Alignment>): Io =>
    ((columnAlignment === Alignment.LEFT) || isUndefined(columnAlignment)) ?
        alignedCellIo + " " as Io :
        columnAlignment === Alignment.RIGHT ?
            " " + alignedCellIo as Io :
            alignedCellIo.length % 2 === 0 ?
                " " + alignedCellIo as Io :
                alignedCellIo + " " as Io

const alignCellIo = (
    cellIo: Maybe<Io>,
    {columnWidth, columnAlignment}: AlignedCellOptions,
): Io => {
    let alignedCellIo = isUndefined(cellIo) ? BLANK : cellIo

    while (alignedCellIo.length < columnWidth) {
        alignedCellIo = furtherAlignCellIo(alignedCellIo, columnAlignment)
    }

    return alignedCellIo
}

export {
    computeColumnAlignments,
    computeColumnWidths,
    alignCellIo,
}
