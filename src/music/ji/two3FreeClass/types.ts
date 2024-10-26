import { Grade } from "../../../lfc"
import { Decimal, Direction, ScaledVector } from "../../../math"

type Two3FreeClass = ScaledVector<
    | { rational: true; rough: 5; direction: Direction.SUPER }
    | { rational: true; rough: 5; direction: Direction.UNISON }
> & { _Two3FreeClassBrand: boolean }

interface ScalaPopularityStat {
    two3FreeClass: Two3FreeClass
    votes: Decimal<{ integer: true }> & Grade<ScalaPopularityStat>
}

export { ScalaPopularityStat, Two3FreeClass }
