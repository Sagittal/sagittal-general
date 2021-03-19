import {
    BASE_2,
    computeIrrationalDecimalFromSpev,
    computeSpevFromDecimal,
    Decimal,
    log,
    Spev,
    subtract,
} from "../math"
import {CENTS_PER_OCTAVE} from "./constants"
import {Cents} from "./types"

const computePitchFromCents = (cents: Cents): Spev<{rational: false}> =>
    computeSpevFromDecimal(2 ** (cents / CENTS_PER_OCTAVE) as Decimal<{rational: false}>)

const computeCentsFromPitch = (pitch: Spev): Cents =>
    log(computeIrrationalDecimalFromSpev(pitch), BASE_2) * CENTS_PER_OCTAVE as Cents

const dividePitch = (dividendPitch: Spev, divisorPitch: Spev): Decimal<{rational: false}> =>
    computeCentsFromPitch(dividendPitch) / computeCentsFromPitch(divisorPitch) as Decimal<{rational: false}>

const subtractPitch = (minuendPitch: Spev, subtrahendPitch: Spev): Cents =>
    subtract(computeCentsFromPitch(minuendPitch), computeCentsFromPitch(subtrahendPitch))

export {
    dividePitch,
    subtractPitch,
    computePitchFromCents,
    computeCentsFromPitch,
}
