import { isEmpty, Maybe } from "../../code"
import { count, max } from "../../math"
import { Count } from "../../types"
import { BLANK } from "../constants"
import { Formatted } from "../format"
import { Cell, Column, Row } from "./types"

const computeHeaderRowsFromFieldTitleColumns = <T>(
    fieldTitleColumns: Column<{ of: T; header: true }>[],
    { includeSpacerRow = false }: { includeSpacerRow?: boolean } = {},
): Row<{ of: T; header: true }>[] => {
    const maxFieldTitleHeaderRowCount = isEmpty(fieldTitleColumns)
        ? 0
        : max(
              ...fieldTitleColumns.map(
                  (fieldTitleColumn: Column<{ of: T; header: true }>): Count<Maybe<Formatted<T>>> => {
                      return count(fieldTitleColumn)
                  },
              ),
          )

    const rows: Row<{ of: T; header: true }>[] = [...Array(maxFieldTitleHeaderRowCount).keys()].map(
        (_: number): Row<{ of: T; header: true }> => [] as unknown[] as Row<{ of: T; header: true }>,
    )

    fieldTitleColumns.forEach((fieldTitleColumn: Column<{ of: T; header: true }>): void => {
        while (fieldTitleColumn.length < maxFieldTitleHeaderRowCount) {
            fieldTitleColumn.unshift(BLANK as Formatted<T>)
        }

        fieldTitleColumn.forEach((fieldTitleCell: Cell<{ of: T; header: true }>, index: number): void => {
            rows[index].push(fieldTitleCell)
        })
    })

    if (includeSpacerRow) {
        rows.push(
            [...Array(fieldTitleColumns.length).keys()].map((_: number): string => BLANK) as Row<{
                of: T
                header: true
            }>,
        )
    }

    return rows
}

export { computeHeaderRowsFromFieldTitleColumns }
