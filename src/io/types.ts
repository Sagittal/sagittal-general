import {Maybe} from "../code"
import {Ms} from "../types"
import {LogTargets} from "./log"
import {TableFormat} from "./table"

type HexColor = string & {_HexColorBrand: boolean}
type Filename = string & {_FileBrand: boolean}

type Char = string & {_CharBrand: boolean}

type Io = string & {_IOBrand?: boolean}

type ColorMethod =
    "white" |
    "gray" |
    "black" |
    "red" |
    "yellow" |
    "green" |
    "cyan" |
    "blue" |
    "magenta"

interface IoSettings {
    noWrite: boolean,
    tableFormat: TableFormat,
    logTargets: LogTargets,
    disableColors: boolean,
    scriptGroup: Filename,
    time: Maybe<Ms>,
}

export {
    ColorMethod,
    HexColor,
    Filename,
    Io,
    Char,
    IoSettings,
}
