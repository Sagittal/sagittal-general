import {TableFormat} from "./table"

type HexColor = string & {_HexColorBrand: boolean}

type Char = string & {_CharBrand: boolean}

type Io = string & {_IOBrand?: boolean}

interface IoSettings {
    tableFormat: TableFormat,
}

export {
    HexColor,
    Io,
    Char,
    IoSettings,
}
