import {computeRoughRationalMonzo, computeSuperMonzo, NumericProperties, Scamon} from "../../../math"
import {TWO_3_FREE} from "./constants"
import {Two3FreeClass} from "./types"

const compute23FreeClass = <T extends NumericProperties>({monzo}: Scamon<T & {rational: true}>): Two3FreeClass => {
    const two3FreeClass = {} as Two3FreeClass

    const two3FreeMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)
    two3FreeClass.monzo = computeSuperMonzo(two3FreeMonzo)

    return two3FreeClass as Two3FreeClass
}

export {
    compute23FreeClass,
}
