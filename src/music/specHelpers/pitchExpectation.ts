import {
    computeIrrationalDecimalFromSpev,
    computeIrrationalPevFromSpev,
    NumericProperties,
    Spev,
} from "../../math"
import {computeCentsFromPitch} from "../cents"
import {PitchExpectation} from "./types"

const computePitchExpectation = <T extends NumericProperties>(pitch: Spev<T>): PitchExpectation<T> =>
    ({
        pitch,
        decimal: computeIrrationalDecimalFromSpev(pitch),
        cents: computeCentsFromPitch(pitch),
        pev: computeIrrationalPevFromSpev(pitch),
    }) as PitchExpectation<T>

export {
    computePitchExpectation,
}
