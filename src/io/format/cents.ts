import {Cents} from "../../music"
import {ioSettings} from "../globals"
import {TableFormat} from "../table"
import {formatDecimal} from "./decimal"
import {Formatted} from "./types"

const formatCents = (
    cents: Cents,
    options: {align?: boolean} = {},
): Formatted<Cents> => {
    let formattedCents = formatDecimal(cents, options)

    // The normal 7, plus 1 for the ¢, but then also another column (7)
    const columnWidth = ioSettings.tableFormat === TableFormat.TERMINAL ? 15 : 8

    formattedCents = formattedCents + "¢" as Formatted<Cents>

    if (options.align && ioSettings.tableFormat !== TableFormat.SPREADSHEET) {
        while (formattedCents.length < columnWidth) {
            formattedCents = " " + formattedCents as Formatted<Cents>
        }
    }

    return formattedCents as Formatted<Cents>
}

export {
    formatCents,
}
