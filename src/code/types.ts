import { Decimal, Integer } from "../math"

type Key = string | number
type KeyValObj<T = unknown> = Record<Key, T>

type SortResultOptions = Partial<{
    descending: boolean
    precision: Precision
}>

type SortOptions = SortResultOptions & {
    by?: SortBy
}

type SortByResultOptions = SortResultOptions & {
    keyPath: KeyPath
}

type SortBy = KeyPath | KeyPath[]

type KeyPath = (Key | KeyValObj<Key>) & { _KeyPathBrand: boolean }

type Obj = (Array<unknown> | KeyValObj) & { [index: string]: unknown } & {
    [index: number]: unknown
}

type RecordKey<T> =
    | T
    | (T extends number ? number : T extends string ? string : T extends symbol ? symbol : unknown)

type Sortable = { [index: string]: number }

type SortResult = -1 | 0 | 1

type Rank<T = void> = Decimal & { _RankBrand: boolean } & (T extends void ? unknown : { _RankOfBrand: T })

type Ranked<T> = T & { rank: Rank<T> }

enum RankStrategy {
    FRACTIONAL = "fractional",
    COMPETITION = "competition",
    DENSE = "dense",
    ORDINAL = "ordinal",
}

type RankOptions = SortOptions &
    Partial<{
        strategy: RankStrategy
    }>

enum ExtensionBaseType {
    ARRAY = "array",
    OBJECT = "object",
}

type Range<T = number> = T[] & { _RangeBrand: boolean }

type Maybe<T> = T | undefined

type Precision = Decimal<Integer> & { _PrecisionBrand: boolean }

type NoProperties = KeyValObj<never>

type Override<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V }

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
    NoProperties,
    Key,
    KeyValObj,
    Override,
}
