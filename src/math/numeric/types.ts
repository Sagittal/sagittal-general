enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

// TypeScript - waiting on support for an Exact Generic Constraint
// See: https://stackoverflow.com/a/58879805/6998322
// And: https://github.com/microsoft/TypeScript/issues/12936
// This could assist in enforcing this object cannot have any members other than real ones
type NumericProperties = Partial<{
    integer: boolean,
    rational: boolean,
    direction: Direction,
    rough: number,
    smooth: number,
}>

type NumericPropertyEffects<T> =
    (T extends {direction: Direction.SUB} ? {_DirectionBrand: Direction.SUB} : {})
    & (T extends {direction: Direction.SUPER} ? {_DirectionBrand: Direction.SUPER} : {})
    & (T extends {direction: Direction.UNISON} ? {_DirectionBrand: Direction.UNISON} : {})
    & (T extends {rough: number} ? {_RoughBrand: Pick<T, "rough">} : {})
    & (T extends {smooth: number} ? {_SmoothBrand: Pick<T, "smooth">} : {})
    & (T extends {rational: true} ? {_RationalBrand: boolean} : {})
    & (T extends {rational: false} ? {_IrrationalBrand: boolean} : {})
    & (T extends {integer: true} ? {_RationalBrand: boolean, _IntegerBrand: boolean} : {})

type NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T extends NumericProperties = {}> =
    & (T extends {rational: true} ? {integer: true} : {})

export {
    NumericProperties,
    Direction,
    NumericPropertyEffects,
    NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms,
}
