import {formatQuotient} from "../../../io"
import {computeQuotientFromVector} from "../../../math"
import {Name} from "../../../types"
import {TWO_3_FREE_CLASS_SIGN} from "./constants"
import {Two3FreeClass} from "./types"

const compute23FreeClassName = (two3FreeClass: Two3FreeClass): Name<Two3FreeClass> => {
    const quotient = computeQuotientFromVector(two3FreeClass.vector)

    return `{${formatQuotient(quotient)}}${TWO_3_FREE_CLASS_SIGN}` as Name<Two3FreeClass>
}

export {
    compute23FreeClassName,
}
