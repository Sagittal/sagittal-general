import {Precision} from "../code"
import {TableFormat} from "./table"
import {Char, Io, IoSettings} from "./types"

export const IO_PRECISION = 3 as Precision

export const IDENTIFYING_MONZO_CHARS = /[\[\]⟩|>]/
export const IDENTIFYING_COMMA_NAME_CHARS = /[unskCSMLA]/
export const IDENTIFYING_CENTS_CHARS = /[c¢]/
export const IDENTIFYING_QUOTIENT_CHARS = /[\/:]/
export const IDENTIFYING_ACCIDENTAL_CHARS = /[()~|!\\`,.'#<>b+\-]/
export const NUMERIC_CHARS = /[0123456789]/

export const SUPERSCRIPT_NUMBERS: Char[] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"] as Char[]
export const SUBSCRIPT_NUMBERS: Char[] = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"] as Char[]

export const NEWLINE = "\n" as Io
export const WINDOWS_CARRIAGE_RETURN = "\r" as Io
export const SPACE = " " as Io
export const BLANK = "" as Io
export const TAB = "\t" as Io
export const COMMA = "," as Io

export const DEFAULT_IO_SETTINGS: IoSettings = {
    tableFormat: TableFormat.TERMINAL,
}
