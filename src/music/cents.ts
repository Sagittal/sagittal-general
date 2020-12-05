import {
    BASE_2,
    computeIrrationalDecimalFromScamon,
    computeScamonFromDecimal,
    Decimal,
    log,
    Scamon,
    subtract,
} from "../math"
import {CENTS_PER_OCTAVE} from "./constants"
import {Cents} from "./types"

const computePitchFromCents = (cents: Cents): Scamon<{rational: false}> =>
    computeScamonFromDecimal(2 ** (cents / CENTS_PER_OCTAVE) as Decimal<{rational: false}>)

const computeCentsFromPitch = (pitch: Scamon): Cents =>
    log(computeIrrationalDecimalFromScamon(pitch), BASE_2) * CENTS_PER_OCTAVE as Cents

const dividePitch = (dividendPitch: Scamon, divisorPitch: Scamon): Decimal<{rational: false}> =>
    computeCentsFromPitch(dividendPitch) / computeCentsFromPitch(divisorPitch) as Decimal<{rational: false}>

const subtractPitch = (minuendPitch: Scamon, subtrahendPitch: Scamon): Cents =>
    subtract(computeCentsFromPitch(minuendPitch), computeCentsFromPitch(subtrahendPitch))

export {
    dividePitch,
    subtractPitch,
    computePitchFromCents,
    computeCentsFromPitch,
}
