import {
    computeRoughRationalVector,
    computeSuperVector,
    NumericProperties,
    Rational,
    ScaledVector,
    Vector,
} from "../../../math"
import { Super } from "../../../math/numeric/types"
import { TWO_3_FREE } from "./constants"
import { Two3FreeClass } from "./types"

const compute23FreeClass = <T extends NumericProperties>({
    vector,
}: ScaledVector<T & Rational>): Two3FreeClass => {
    const two3FreeClass = {} as Two3FreeClass

    const two3FreeVector = computeRoughRationalVector(vector as Vector, TWO_3_FREE)
    two3FreeClass.vector = computeSuperVector(two3FreeVector) as Vector<
        Rational &
            Super & {
                rough: 5
            }
    >

    return two3FreeClass
}

export { compute23FreeClass }
