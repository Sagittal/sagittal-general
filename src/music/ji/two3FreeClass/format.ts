import {Formatted, ioSettings, TableFormat} from "../../../io"
import {computeQuotientFromPev, Quotient} from "../../../math"
import {compute23FreeClassName} from "./name"
import {Two3FreeClass} from "./types"

const format23FreeClass = (two3FreeClass: Two3FreeClass): Formatted<Two3FreeClass> => {
    const [numerator, denominator]: Quotient = computeQuotientFromPev(two3FreeClass.pev)

    return ioSettings.tableFormat === TableFormat.FORUM ?
        denominator === 1 ?
            `[latex]\\{${numerator}\\}_{\\scriptsize{2,3}}[/latex]` as Formatted<Two3FreeClass> :
            `[latex]\\{\\frac{${numerator}}{${denominator}}\\}_{\\scriptsize{2,3}}[/latex]` as
                Formatted<Two3FreeClass> :
        compute23FreeClassName(two3FreeClass) as string as Formatted<Two3FreeClass>
}

export {
    format23FreeClass,
}
