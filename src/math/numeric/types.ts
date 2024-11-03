import { NoProperties } from "../../code"
import { Irrational } from "../irrational"
import { Integer, Rational } from "../rational"

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

enum Sign {
    POSITIVE = "positive",
    NEGATIVE = "negative",
    UNSIGNED = "unsigned",
}

// TypeScript - waiting on support for an Exact Generic Constraint
// See: https://stackoverflow.com/a/58879805/6998322
// And: https://github.com/microsoft/TypeScript/issues/12936
// This could assist in enforcing this object cannot have any members other than real ones
type NumericProperties = Partial<{
    integer: boolean
    rational: boolean
    direction: Direction
    rough: number
    smooth: number
    sign: Sign
}>

type Super = { direction: Direction.SUPER }
type Sub = { direction: Direction.SUB }
type Unison = { direction: Direction.UNISON }

type Positive = { sign: Sign.POSITIVE }
type Negative = { sign: Sign.NEGATIVE }
type Unsigned = { sign: Sign.UNSIGNED }

type NumericPropertyEffects<T> = (
    | (T extends Sub ? { _DirectionBrand: Direction.SUB } : unknown)
    | (T extends Super ? { _DirectionBrand: Direction.SUPER } : unknown)
    | (T extends Unison ? { _DirectionBrand: Direction.UNISON } : unknown)
) &
    (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : unknown) &
    (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : unknown) &
    (
        | (T extends Integer ? { _RationalBrand: boolean; _IntegerBrand: boolean } : unknown)
        | (T extends Rational ? { _RationalBrand: boolean } : unknown)
        | (T extends Irrational ? { _IrrationalBrand: boolean } : unknown)
    ) &
    (
        | (T extends Positive ? { _SignBrand: Sign.POSITIVE } : unknown)
        | (T extends Negative ? { _SignBrand: Sign.NEGATIVE } : unknown)
        | (T extends Unsigned ? { _SignBrand: Sign.UNSIGNED } : unknown)
    )

type NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<
    T extends NumericProperties = NoProperties,
> = T extends Rational ? T & Integer : T

export {
    NumericProperties,
    Direction,
    NumericPropertyEffects,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
    Sign,
    Super,
    Sub,
    Unison,
    Unsigned,
    Positive,
    Negative,
}
