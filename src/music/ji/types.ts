import { NoProperties } from "../../code"
import { NumericProperties, Rational, ScaledVector } from "../../math"
import { Cents } from "../types"

type Comma<T extends NumericProperties = NoProperties> = ScaledVector<T & Rational> & {
    _CommaBrand: boolean
}

type Apotome = Cents & { _ApotomeBrand: boolean }

export { Apotome, Comma }
