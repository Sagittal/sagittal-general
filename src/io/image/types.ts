type Px = number & {_PxBrand: "Px"}

type Scale<T extends number | void = void> =
    number
    & {_ScaleBrand: boolean}
    & (T extends void ? {} : {_ScaleOfBrand: T})
type Basis<T extends number | void = void> =
    number
    & {_BasisBrand: boolean}
    & (T extends void ? {} : {_BasisOfBrand: T})

export {
    Px,
    Scale,
    Basis,
}
