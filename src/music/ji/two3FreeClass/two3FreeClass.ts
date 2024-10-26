import {computeRoughRationalVector, computeSuperVector, NumericProperties, ScaledVector} from "../../../math"
import {TWO_3_FREE} from "./constants"
import {Two3FreeClass} from "./types"

const compute23FreeClass = <T extends NumericProperties>({vector}: ScaledVector<T & {rational: true}>): Two3FreeClass => {
    const two3FreeClass = {} as Two3FreeClass

    const two3FreeVector = computeRoughRationalVector(vector, TWO_3_FREE)
    two3FreeClass.vector = computeSuperVector(two3FreeVector)

    return two3FreeClass as Two3FreeClass
}

export {
    compute23FreeClass,
}
