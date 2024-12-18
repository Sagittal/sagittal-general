import { Io, Unicode, UnicodeLiteral, Word } from "./types"

const UNICODE_LITERAL_MATCHER = /^\\?[uU]\+?([\da-fA-F]{4,6})/

const isUnicodeLiteral = (
    candidateUnicodeLiteral: Io & Word,
): candidateUnicodeLiteral is UnicodeLiteral & Word =>
    !!candidateUnicodeLiteral.match(UNICODE_LITERAL_MATCHER)

const computeUnicodeLiteralFromUnicode = (unicode: Unicode & Word): UnicodeLiteral & Word => {
    if (unicode.length === 0) return "(BLANK)" as UnicodeLiteral & Word

    let unicodeLiteral = unicode.charCodeAt(0).toString(16).toUpperCase()
    while (unicodeLiteral.length < 4) unicodeLiteral = "0" + unicodeLiteral

    return `U+${unicodeLiteral}` as UnicodeLiteral & Word
}

const computeUnicodeFromUnicodeLiteral = (unicodeLiteral: UnicodeLiteral): Unicode & Word =>
    String.fromCodePoint(parseInt(unicodeLiteral.replace(UNICODE_LITERAL_MATCHER, "0x$1"))) as Unicode & Word

export { isUnicodeLiteral, computeUnicodeLiteralFromUnicode, computeUnicodeFromUnicodeLiteral }
