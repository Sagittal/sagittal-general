import {Multiplier} from "../../math"
import {FontName} from "../types"

type Px = number & {_PxBrand: "Px"}

type Scale<T extends number | void = void> =
    number
    & {_ScaleBrand: boolean}
    & (T extends void ? {} : {_ScaleOfBrand: T})
type Basis<T extends number | void = void> =
    number
    & {_BasisBrand: boolean}
    & (T extends void ? {} : {_BasisOfBrand: T})

type TextToSvgOptions = Partial<{
    font: FontName,
    line: Multiplier<Px>,
    fontSize: Px,
}>

export {
    Px,
    Scale,
    Basis,
    TextToSvgOptions,
}
