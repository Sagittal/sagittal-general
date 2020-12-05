import {Io} from "../types"
import {computeHeaderRowsFromFieldTitleColumns} from "./headerRowsFromFieldTitleColumns"
import {Column, Row} from "./types"

const splitFieldTitlesIntoRowsBySpaces = <T>(
    fieldTitles: Io[],
    options: {includeSpacerRow?: boolean} = {},
): Array<Row<{of: T, header: true}>> => {
    const popular23FreeClassesFieldTitleColumns = fieldTitles.map((fieldTitle: Io): Column<{of: T, header: true}> => {
        return fieldTitle.split(" ") as Column<{of: T, header: true}>
    })

    return computeHeaderRowsFromFieldTitleColumns(popular23FreeClassesFieldTitleColumns, options)
}

export {
    splitFieldTitlesIntoRowsBySpaces,
}
