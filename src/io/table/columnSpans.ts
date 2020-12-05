import {increment, indexOfFinalElement} from "../../code"
import {Count} from "../../types"
import {MERGED_CELL_INDICATOR} from "./constants"
import {Cell, Row} from "./types"

const computeColumnSpans = <T>(row: Row<{of: T}>): Array<Count<Cell<{of: T}>>> => {
    const columnSpans = [] as Array<Count<Cell>>

    let mergeCounter = 0 as Count<Cell<{of: T}>>
    row.forEach((cell: Cell<{of: T}>): void => {
        const finalColumnSpanIndex = indexOfFinalElement(columnSpans)

        if (cell === MERGED_CELL_INDICATOR) {
            columnSpans[finalColumnSpanIndex] = increment(columnSpans[finalColumnSpanIndex])
            mergeCounter = increment(mergeCounter)
        } else {
            if (mergeCounter > 0) {
                for (let i = 0; i < mergeCounter; i++) {
                    columnSpans.push(0 as Count<Cell<{of: T}>>)
                }
                mergeCounter = 0 as Count<Cell<{of: T}>>
            }
            columnSpans.push(1 as Count<Cell<{of: T}>>)
        }
    })

    return columnSpans
}

export {
    computeColumnSpans,
}
