import { TableFormat } from "./table"

type HexColor = string & { _HexColorBrand: boolean }

type Sentence = string & { _SentenceBrand: boolean }
type Clause = string & { _ClauseBrand: boolean }
type Word = string & { _WordBrand: boolean }
type Char = string & { _CharBrand: boolean }

type Io = string & { _IOBrand?: boolean }

type FontName = string & { _FontNameBrand: boolean }

type CaseDesensitized = string & { _CaseDesensitizedBrand: boolean }

type Unicode = string & { _UniBrand: boolean }
type UnicodeLiteral = string & { _UnicodeLiteralBrand: boolean }

interface IoSettings {
    tableFormat: TableFormat
}

export {
    HexColor,
    Io,
    Sentence,
    Clause,
    Word,
    Char,
    IoSettings,
    FontName,
    CaseDesensitized,
    Unicode,
    UnicodeLiteral,
}
