import {Decimal, round} from "../../math"
import {IO_PRECISION} from "../constants"
import {ioSettings} from "../globals"
import {TableFormat} from "../table"
import {Formatted} from "./types"

const alignFormattedDecimal = (
    formattedDecimal: Formatted<Decimal>,
): Formatted<Decimal> => {
    while (formattedDecimal.length < 7) {
        formattedDecimal = " " + formattedDecimal as Formatted<Decimal>
    }

    return formattedDecimal
}

const alignFormattedIntegerDecimal = (
    formattedIntegerDecimal: Formatted<Decimal<{integer: true}>>,
): Formatted<Decimal<{integer: true}>> => {
    while (formattedIntegerDecimal.length < 3) {
        formattedIntegerDecimal = " " + formattedIntegerDecimal as Formatted<Decimal<{integer: true}>>
    }
    while (formattedIntegerDecimal.length < 7) {
        formattedIntegerDecimal = formattedIntegerDecimal + " " as Formatted<Decimal<{integer: true}>>
    }

    return formattedIntegerDecimal
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
): Formatted<Decimal<{integer: true}>> => {
    let stringifiedIntegerDecimal = integerDecimal
        .toString() as Formatted<Decimal<{integer: true}>>

    return align && ioSettings.tableFormat !== TableFormat.SPREADSHEET ?
        alignFormattedIntegerDecimal(stringifiedIntegerDecimal) :
        stringifiedIntegerDecimal
}

export {
    alignFormattedDecimal,
    formatDecimal,
    formatIntegerDecimal,
}
