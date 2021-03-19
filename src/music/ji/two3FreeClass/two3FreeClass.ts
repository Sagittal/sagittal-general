import {computeRoughRationalPev, computeSuperPev, NumericProperties, Spev} from "../../../math"
import {TWO_3_FREE} from "./constants"
import {Two3FreeClass} from "./types"

const compute23FreeClass = <T extends NumericProperties>({pev}: Spev<T & {rational: true}>): Two3FreeClass => {
    const two3FreeClass = {} as Two3FreeClass

    const two3FreePev = computeRoughRationalPev(pev, TWO_3_FREE)
    two3FreeClass.pev = computeSuperPev(two3FreePev)

    return two3FreeClass as Two3FreeClass
}

export {
    compute23FreeClass,
}
