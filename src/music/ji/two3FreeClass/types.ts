import { Grade } from "../../../lfc"
import { Decimal, Integer, Rational, Rough, ScaledVector, Super, Unison } from "../../../math"

type Two3FreeClass = ScaledVector<Rational & Rough<5> & (Super | Unison)> & {
    _Two3FreeClassBrand: boolean
}

interface ScalaPopularityStat {
    two3FreeClass: Two3FreeClass
    votes: Decimal<Integer> & Grade<ScalaPopularityStat>
}

export { ScalaPopularityStat, Two3FreeClass }
