import {
    BASE_2,
    computeIrrationalDecimalFromScaledVector,
    computeScaledVectorFromDecimal,
    Decimal,
    log,
    ScaledVector,
    subtract,
} from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computePitchFromCents = (cents: Cents): ScaledVector<{ rational: false }> =>
    computeScaledVectorFromDecimal(
        (2 ** (cents / CENTS_PER_OCTAVE)) as Decimal<{ rational: false }>,
    )

const computeCentsFromPitch = (pitch: ScaledVector): Cents =>
    (log(computeIrrationalDecimalFromScaledVector(pitch), BASE_2) * CENTS_PER_OCTAVE) as Cents

const dividePitch = (
    dividendPitch: ScaledVector,
    divisorPitch: ScaledVector,
): Decimal<{ rational: false }> =>
    (computeCentsFromPitch(dividendPitch) / computeCentsFromPitch(divisorPitch)) as Decimal<{
        rational: false
    }>

const subtractPitch = (minuendPitch: ScaledVector, subtrahendPitch: ScaledVector): Cents =>
    subtract(computeCentsFromPitch(minuendPitch), computeCentsFromPitch(subtrahendPitch))

export { dividePitch, subtractPitch, computePitchFromCents, computeCentsFromPitch }
