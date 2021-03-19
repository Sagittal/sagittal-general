import {Io} from "../types"

type Formatted<T = unknown> = Io & {_FormattedBrand: T}

enum TimePrecision {
    D,
    H,
    M,
    S,
    MS,
}

interface FormatPevOrMappingOptions {
    punctuated?: boolean,
    abbreviated?: boolean,
}

export {
    Formatted,
    TimePrecision,
    FormatPevOrMappingOptions,
}
