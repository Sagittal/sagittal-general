import {TableFormat} from "./table"

type HexColor = string & {_HexColorBrand: boolean}

type Sentence = string & {_SentenceBrand: boolean}
type Word = string & {_WordBrand: boolean}
type Char = string & {_CharBrand: boolean}

type Io = string & {_IOBrand?: boolean}

type FontName = string & {_FontNameBrand: boolean}

interface IoSettings {
    tableFormat: TableFormat,
}

export {
    HexColor,
    Io,
    Sentence,
    Word,
    Char,
    IoSettings,
    FontName,
}
