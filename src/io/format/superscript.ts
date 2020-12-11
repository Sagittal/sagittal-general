import {Decimal, NumericProperties} from "../../math"
import {BLANK, NUMERIC_CHARS, SUPERSCRIPT_NUMBERS} from "../constants"
import {Formatted} from "./types"

const formatDecimalAsSuperscript = <T extends NumericProperties>(
    decimal: Decimal<T>
): Formatted<Decimal<T>> =>
    decimal.toString().split(BLANK).map((char: string): string =>
        char.match(NUMERIC_CHARS) ? SUPERSCRIPT_NUMBERS[parseInt(char)] : char
    ).join(BLANK) as Formatted<Decimal<T>>

export {
    formatDecimalAsSuperscript,
}
