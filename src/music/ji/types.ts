import { Rational, ScaledVector } from "../../math"
import { Cents } from "../types"

type Comma = ScaledVector<Rational> & {
    _CommaBrand: boolean
}

type Apotome = Cents & { _ApotomeBrand: boolean }

export { Apotome, Comma }
