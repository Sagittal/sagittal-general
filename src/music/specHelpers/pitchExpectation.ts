import {
    computeIrrationalDecimalFromScaledVector,
    computeIrrationalVectorFromScaledVector,
    NumericProperties,
    ScaledVector,
} from "../../math"
import { computeCentsFromPitch } from "../cents"
import { PitchExpectation } from "./types"

const computePitchExpectation = <T extends NumericProperties>(pitch: ScaledVector<T>): PitchExpectation<T> =>
    ({
        pitch,
        decimal: computeIrrationalDecimalFromScaledVector(pitch),
        cents: computeCentsFromPitch(pitch),
        vector: computeIrrationalVectorFromScaledVector(pitch),
    }) as PitchExpectation<T>

export { computePitchExpectation }
