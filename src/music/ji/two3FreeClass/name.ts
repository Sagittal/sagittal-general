import {formatQuotient} from "../../../io"
import {computeQuotientFromMonzo} from "../../../math"
import {Name} from "../../../types"
import {TWO_3_FREE_CLASS_SIGN} from "./constants"
import {Two3FreeClass} from "./types"

const compute23FreeClassName = (two3FreeClass: Two3FreeClass): Name<Two3FreeClass> => {
    const quotient = computeQuotientFromMonzo(two3FreeClass.monzo)

    return `{${formatQuotient(quotient)}}${TWO_3_FREE_CLASS_SIGN}` as Name<Two3FreeClass>
}

export {
    compute23FreeClassName,
}
