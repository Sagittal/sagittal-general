import {
    computeIrrationalDecimalFromScamon,
    computeIrrationalMonzoFromScamon,
    NumericProperties,
    Scamon,
} from "../../math"
import {computeCentsFromPitch} from "../cents"
import {PitchExpectation} from "./types"

const computePitchExpectation = <T extends NumericProperties>(pitch: Scamon<T>): PitchExpectation<T> =>
    ({
        pitch,
        decimal: computeIrrationalDecimalFromScamon(pitch),
        cents: computeCentsFromPitch(pitch),
        monzo: computeIrrationalMonzoFromScamon(pitch),
    }) as PitchExpectation<T>

export {
    computePitchExpectation,
}
