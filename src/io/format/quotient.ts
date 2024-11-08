import { computeSuperQuotient, Denominator, Numerator, Quotient, NumericProperties } from "../../math"
import { ioSettings } from "../globals"
import { TableFormat } from "../table"
import { Formatted } from "./types"

const formatQuotient = <T extends NumericProperties>(
    inputQuotient: Quotient<T>,
    { directed = true, noLaTeXMultiplier = false }: { directed?: boolean; noLaTeXMultiplier?: boolean } = {},
): Formatted<T> => {
    let [numerator, denominator] = directed
        ? inputQuotient
        : (computeSuperQuotient(inputQuotient) as Quotient<T>)

    if (numerator === Infinity) numerator = "(too big for JS)" as unknown as Numerator<T>
    if (denominator === Infinity) denominator = "(too big for JS)" as unknown as Denominator<T>

    return directed
        ? ioSettings.tableFormat === TableFormat.FORUM && !noLaTeXMultiplier
            ? denominator === 1
                ? (`[latex]${numerator}[/latex]` as Formatted<T>)
                : (`[latex]\\frac{${numerator}}{${denominator}}[/latex]` as Formatted<T>)
            : denominator === 1
              ? (`${numerator}` as Formatted<T>)
              : (`${numerator}/${denominator}` as Formatted<T>)
        : (`${denominator}:${numerator}` as Formatted<T>)
}

export { formatQuotient }

/*
5/4 valid directed quotient (super)                 4/5 valid directed quotient (sub)
[5, 4] as Quotient<Super>                           [4, 5] as Quotient<Sub>

5:4 does not exist                                  4:5 valid undirected quotient
                                                    [5, 4] as Quotient
 */
