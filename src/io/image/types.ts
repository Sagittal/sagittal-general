import { Decimal, Multiplier } from "../../math"
import { Filename } from "../../node"

type Px = Decimal & { _PxBrand: "Px" }

type Scale<T extends number | void = void> = number & { _ScaleBrand: boolean } & (T extends void
        ? unknown
        : { _ScaleOfBrand: T })
type Basis<T extends number | void = void> = number & { _BasisBrand: boolean } & (T extends void
        ? unknown
        : { _BasisOfBrand: T })

type TextToSvgOptions = Partial<{
    font: Filename
    line: Multiplier<Px>
    fontSize: Px
    padding: Px
    extraWidth: Px
}>

export { Px, Scale, Basis, TextToSvgOptions }
