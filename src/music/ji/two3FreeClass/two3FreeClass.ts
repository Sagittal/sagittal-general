import {
    computeRoughRationalVector,
    computeSuperVector,
    Rational,
    Rough,
    ScaledVector,
    Vector,
} from "../../../math"
import { Super } from "../../../math"
import { TWO_3_FREE } from "./constants"
import { Two3FreeClass } from "./types"

const compute23FreeClass = <T extends Rational>({ vector }: ScaledVector<T>): Two3FreeClass => {
    const two3FreeClass = {} as Two3FreeClass

    const two3FreeVector = computeRoughRationalVector(vector as Vector, TWO_3_FREE)
    two3FreeClass.vector = computeSuperVector(two3FreeVector) as Vector<Rational & Rough<5> & Super>

    return two3FreeClass
}

export { compute23FreeClass }
