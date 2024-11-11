import { Maybe, NoProperties } from "./code"
import { Io } from "./io"
import { Decimal, Max, Min, Multiplier, NumericProperties, Quotient } from "./math"
import { Integer } from "./math"

type Index<T = void> = Decimal<Integer> & { _IndexBrand: boolean } & (T extends void
        ? unknown
        : { _IndexOfBrand: T })
type Count<T = void> = Multiplier &
    Decimal<Integer> & { _CountBrand: boolean } & (T extends void ? unknown : { _CountOfBrand: T })
type Offset<T = void> = Decimal<Integer> & { _OffsetBrand: boolean } & (T extends void
        ? unknown
        : { _OffsetOfBrand: T })

type Step<O extends { of?: number } = { of: number }, T extends NumericProperties = Integer> = Decimal<T> & {
    // Iteration?
    _StepBrand: boolean
} & (O extends { of: number } ? { _StepOfEdBrand: O["of"] } : unknown)
type Ed<O extends { of?: number } = { of: number }, T extends NumericProperties = Integer> = Decimal<T> & {
    // Generator?
    _EdBrand: boolean
} & (O extends { of: number } ? { _EdOfWindowBrand: O["of"] } : unknown)
type Window<
    O extends { of?: number } = { of: number },
    T extends NumericProperties = NoProperties,
> = Decimal<T> & { _WindowBrand: boolean } & (O extends { of: number } ? { _OfSizeBrand: O["of"] } : unknown) // Period?
type Degree<O extends { of?: number } = { of: number }, T extends NumericProperties = Integer> = [
    Step<O, T>,
    Ed<O, T>,
] &
    Quotient

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

type Ms = number & { _MsBrand: boolean }

type Of<T> = { _OfBrand: T }

export { Index, Count, Window, Step, Ed, Name, Abbreviation, Extrema, Ms, Of, Degree, Offset, Id }
