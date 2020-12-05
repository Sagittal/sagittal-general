import {Decimal, round} from "../../math"
import {IO_PRECISION} from "../constants"
import {ioSettings} from "../globals"
import {TableFormat} from "../table"
import {Formatted} from "./types"

const alignFormattedDecimal = (formattedDecimal: Formatted<Decimal>): Formatted<Decimal> => {
    while (formattedDecimal.length < 7) {
        formattedDecimal = " " + formattedDecimal as Formatted<Decimal>
    }

    return formattedDecimal
}

const formatDecimal = (
    decimal: Decimal,
    {align}: {align?: boolean} = {},
): Formatted<Decimal> => {
    const roundedDecimal = round(decimal, IO_PRECISION)
        .toFixed(3)
        .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<Decimal>

    return align && ioSettings.tableFormat !== TableFormat.SPREADSHEET ?
        alignFormattedDecimal(roundedDecimal) :
        roundedDecimal
}

const formatIntegerDecimal = (
    integerDecimal: Decimal<{integer: true}>,
    {align}: {align?: boolean} = {},
): Formatted<Decimal> => {
    const stringifiedIntegerDecimal = integerDecimal.toString()

    return align && ioSettings.tableFormat !== TableFormat.SPREADSHEET ?
        alignFormattedDecimal(
            stringifiedIntegerDecimal + "    " as Formatted<Decimal<{integer: true}>>,
        ) :
        stringifiedIntegerDecimal as Formatted<Decimal<{integer: true}>>
}

export {
    alignFormattedDecimal,
    formatDecimal,
    formatIntegerDecimal,
}
