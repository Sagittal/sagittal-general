import {Decimal} from "../math"

type SortResultOptions = Partial<{
    descending: boolean,
    precision: Precision,
}>

type SortOptions = SortResultOptions & {
    by?: SortBy,
}

type SortByResultOptions = SortResultOptions & {
    keyPath: KeyPath,
}

type SortBy = KeyPath | KeyPath[]

type KeyPath = (
    number
    | string
    | Record<number | string, number | string | Record<number | string, number | string>>
    ) & {_KeyPathBrand: boolean}

type Obj = (Array<unknown> | Record<any, unknown>) & {[index: string]: unknown} & {[index: number]: unknown}

type RecordKey<T> = T | (T extends number ? number : T extends string ? string : {})

type Sortable = {[index: string]: number}

type SortResult = -1 | 0 | 1

type Rank<T = void> = number & {_RankBrand: boolean} & (T extends void ? {} : {_RankOfBrand: T})

type Ranked<T> = T & {rank: Rank<T>}

enum RankStrategy {
    FRACTIONAL = "fractional",
    COMPETITION = "competition",
    DENSE = "dense",
    ORDINAL = "ordinal",
}

type RankOptions = SortOptions & Partial<{
    strategy: RankStrategy
}>

enum ExtensionBaseType {
    ARRAY = "array",
    OBJECT = "object",
}

type Range<T = number> = T[] & {_RangeBrand: boolean}

type Maybe<T> = T | undefined

type Precision = Decimal<{integer: true}> & {_PrecisionBrand: boolean}

export {
    SortOptions,
    Rank,
    Sortable,
    Ranked,
    RankOptions,
    RankStrategy,
    ExtensionBaseType,
    Range,
    Maybe,
    KeyPath,
    Obj,
    RecordKey,
    Precision,
    SortByResultOptions,
    SortResult,
    SortResultOptions,
    SortBy,
}
