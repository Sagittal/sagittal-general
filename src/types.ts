import { Maybe, NoProperties } from "./code"
import { Io } from "./io"
import { Decimal, Integer, Max, Min, Multiplier, NumericProperties, Quotient } from "./math"

type Index<T = void> = Decimal<Integer> & { _IndexBrand: boolean } & (T extends void
        ? unknown
        : { _IndexOfBrand: T })
type Count<T = void> = Multiplier &
    Decimal<Integer> & { _CountBrand: boolean } & (T extends void ? unknown : { _CountOfBrand: T })
type Offset<T = void> = Decimal<Integer> & { _OffsetBrand: boolean } & (T extends void
        ? unknown
        : { _OffsetOfBrand: T })

type Step<T extends NumericProperties & { of?: number } = NoProperties> = // Iteration?
    Decimal<T> & { _StepBrand: boolean } & (T extends { of: number } ? { _StepOfEdBrand: T["of"] } : unknown)
type Ed<T extends NumericProperties & { of?: number } = NoProperties> = // Generator?
    Decimal<T & Integer> & { _EdBrand: boolean } & (T extends { of: number }
            ? { _EdOfWindowBrand: T["of"] }
            : unknown)
type Window<T extends NumericProperties & { of?: number } = NoProperties> = // Period?
    Decimal<T> & { _WindowBrand: boolean } & (T extends { of: number } ? { _OfSizeBrand: T["of"] } : unknown)
type Degree = [Step, Ed] & Quotient

type Id<T = void> = Io & { _IdBrand: boolean } & (T extends void ? unknown : { _IdOfBrand: T })
type Name<T = void> = Io & { _NameBrand: boolean } & (T extends void ? unknown : { _NameOfBrand: T })
type Abbreviation<T = void> = Io & { _AbbreviationBrand: boolean } & (T extends void
        ? unknown
        : { _AbbreviationOfBrand: T })

type Extrema<T extends { of?: unknown; open?: boolean } = { of: number; open: false }> = T extends {
    open: true
}
    ? [Maybe<Min<T["of"]>>, Maybe<Max<T["of"]>>]
    : [Min<T["of"]>, Max<T["of"]>]

type Ms = Decimal & { _MsBrand: boolean }

type Of<T> = { _OfBrand: T }

export { Index, Count, Window, Step, Ed, Name, Abbreviation, Extrema, Ms, Of, Degree, Offset, Id }
