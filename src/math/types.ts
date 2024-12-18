import { NoProperties } from "../code"
import { Sign } from "./numeric"

type Augend<T extends number | void = void> = number & { _AugendBrand: boolean } & (T extends void
        ? unknown
        : T & { _AugendOfBrand: T })
type Addend<T extends number | void = void> = number & { _AddendBrand: boolean } & (T extends void
        ? unknown
        : T & { _AddendOfBrand: T })
type Minuend<T extends number | void = void> = number & { _MinuendBrand: boolean } & (T extends void
        ? unknown
        : T & { _MinuendOfBrand: T })
type Subtrahend<T extends number | void = void> = number & { _SubtrahendBrand: boolean } & (T extends void
        ? unknown
        : T & { _SubtrahendOfBrand: T })
type Multiplicand<T extends number | void = void> = number & {
    _MultiplicandBrand: boolean
} & (T extends void ? unknown : T & { _MultiplicandOfBrand: T })
type Multiplier<T extends number | void = void> = number & { _MultiplierBrand: boolean } & (T extends void
        ? unknown
        : T & { _MultiplierOfBrand: T })
type Dividend<T extends number | void = void> = number & { _DividendBrand: boolean } & (T extends void
        ? unknown
        : T & { _DividendOfBrand: T })
type Divisor<T extends number | void = void> = number & { _DivisorBrand: boolean } & (T extends void
        ? unknown
        : T & { _DivisorOfBrand: T })
type Sum<T extends number | void = void> = number & { _SumBrand: boolean } & (T extends void
        ? unknown
        : T & { _SumOfBrand: T })
type Product<T extends number | void = void> = number & { _ProductBrand: boolean } & (T extends void
        ? unknown
        : T & { _ProductOfBrand: T })

type Combination<T> = T[] & { _CombinationBrand: boolean }
type Combinations<T> = Combination<T>[] & { _CombinationsBrand: boolean }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: boolean }
type Distribution<T> = DistributionBin<T>[] & { _DistributionBrand: boolean }

// Numeric types where parameter is also numeric
type Exponent<T extends number = number> = number & { _ExponentBrand: boolean; _ExponentOfBrand: T }
type Base<T extends number = number> = number & { _BaseBrand: boolean; _BaseOfBrand: T }
type Power<T extends number = number> = number & { _PowerBrand: boolean; _PowerOfBrand: T }

// Qualities of numerics
type Abs<T extends number = number> = T & { _AbsBrand: boolean; _SignBrand: Sign.POSITIVE }

// Experimenting with not necessarily applying to numbers,
// Though it seems like plenty others of these might be flexible in that way too
type Max<T = number> = T & { _MaxBrand: boolean }
type Min<T = number> = T & { _MinBrand: boolean }

enum MeanType {
    ARITHMETIC = "arithmetic",
    GEOMETRIC = "geometric",
    HARMONIC = "harmonic",
}

type MeanProperties = Partial<{
    of: unknown
    meanType: MeanType
}>

type Mean<T extends MeanProperties = NoProperties> = T["of"] & {
    _AverageBrand: boolean
} & (T extends { of: unknown } ? unknown : { _AvgOfBrand: T["of"] }) &
    (T extends { meanType: MeanType.ARITHMETIC } ? { _MeanTypeBrand: MeanType.ARITHMETIC } : unknown) &
    (T extends { meanType: MeanType.GEOMETRIC } ? { _MeanTypeBrand: MeanType.GEOMETRIC } : unknown) &
    (T extends { meanType: MeanType.HARMONIC } ? { _MeanTypeBrand: MeanType.HARMONIC } : unknown)

type X = number & { _XBrand: boolean }
type Y = number & { _YBrand: boolean }
// type Coordinate = X | Y
type Coordinates = [X, Y]
type Radians = number & { _RadiansBrand: boolean }
type Degrees = number & { _DegreesBrand: boolean }

export {
    Multiplicand,
    Multiplier,
    Dividend,
    Divisor,
    Product,
    Sum,
    Augend,
    Addend,
    Minuend,
    Subtrahend,
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    Exponent,
    Base,
    Power,
    Max,
    Min,
    Mean,
    MeanType,
    Abs,
    Coordinates,
    Radians,
    Degrees,
}
