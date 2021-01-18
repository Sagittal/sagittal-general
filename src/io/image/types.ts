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

interface VectorizeTextOptions {
    height?: Px,
    font?: FontName,
    canvas?: HTMLCanvasElement,
    context?: CanvasRenderingContext2D,
    lineSpacing?: number,
}

interface TextToSvgOptions {
    font?: FontName,
}

export {
    Px,
    Scale,
    Basis,
    VectorizeTextOptions,
    TextToSvgOptions,
}
