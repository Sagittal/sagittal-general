import { NoProperties } from "../../code"
import { Rough, Smooth } from "../rational"

type Integer = NumericProperties & { _IntegerBrand: true; _RationalBrand: true }
type Rational = NumericProperties & { _RationalBrand: true }
type Irrational = NumericProperties & { _RationalBrand: false; _IntegerBrand: false }
type Noninteger = NumericProperties & { _IntegerBrand: false }
type UnknownIntegrality = { _IntegerBrand: unknown }
type UnknownRationality = { _RationalBrand: unknown }

enum Direction {
    SUPER,
    SUB,
    UNISON,
}
type Super = { _DirectionBrand: Direction.SUPER }
type Sub = { _DirectionBrand: Direction.SUB }
type Unison = { _DirectionBrand: Direction.UNISON }
type UnknownDirection = { _DirectionBrand: unknown }
type AnyDirection = { _DirectionBrand: Direction.SUPER & Direction.SUB & Direction.UNISON }

enum Sign {
    POSITIVE,
    NEGATIVE,
    UNSIGNED,
}
type Positive = { _SignBrand: Sign.POSITIVE }
type Negative = { _SignBrand: Sign.NEGATIVE }
type Unsigned = { _SignBrand: Sign.UNSIGNED }
type UnknownSign = { _SignBrand: unknown }
type AnySign = { _SignBrand: Sign.POSITIVE & Sign.NEGATIVE & Sign.UNSIGNED }

type NumericProperties =
    | UnknownIntegrality
    | UnknownRationality
    | UnknownDirection
    | UnknownSign
    | Rough<unknown>
    | Smooth<unknown>
    | NoProperties

type NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<
    T extends NumericProperties = NoProperties,
> = T extends Rational ? Integer : NoProperties

export {
    NumericProperties,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
    Super,
    Sub,
    Unison,
    Unsigned,
    Positive,
    Negative,
    UnknownDirection,
    UnknownSign,
    AnyDirection,
    AnySign,
    Sign,
    Direction,
    Integer,
    Rational,
    Irrational,
    Noninteger,
    UnknownIntegrality,
    UnknownRationality,
}
