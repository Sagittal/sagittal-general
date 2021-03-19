import {isUndefined, Maybe} from "../../code"
import {Max, Min, Spev} from "../../math"
import {formatPitch} from "./pitch"
import {Formatted} from "./types"

const formatBound = (bound: Maybe<Min<Spev> | Max<Spev>>, exclusive: Maybe<boolean>): Formatted => {
    if (isUndefined(bound)) {
        return "(none)" as Formatted
    }

    const formattedBound = formatPitch(bound, {align: true, noLaTeXScaler: true})
    const formattedExclusive = !!exclusive ? "exclusive" : "inclusive"

    return `${formattedBound} (${formattedExclusive})` as Formatted
}

export {
    formatBound,
}
