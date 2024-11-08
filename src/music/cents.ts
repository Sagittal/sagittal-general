import {
    BASE_2,
    computeIrrationalDecimalFromScaledVector,
    computeScaledVectorFromDecimal,
    Decimal,
    Irrational,
    log,
    NumericProperties,
    ScaledVector,
    subtract,
} from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computePitchFromCents = <T extends NumericProperties>(cents: Cents): ScaledVector<T & Irrational> =>
    computeScaledVectorFromDecimal((2 ** (cents / CENTS_PER_OCTAVE)) as Decimal<T & Irrational>)

const computeCentsFromPitch = <T extends NumericProperties>(pitch: ScaledVector<T>): Cents =>
    (log(computeIrrationalDecimalFromScaledVector(pitch), BASE_2) * CENTS_PER_OCTAVE) as Cents

const dividePitch = <T extends NumericProperties, U extends NumericProperties>(
    dividendPitch: ScaledVector<T>,
    divisorPitch: ScaledVector<U>,
): Decimal<Irrational> =>
    (computeCentsFromPitch(dividendPitch) / computeCentsFromPitch(divisorPitch)) as Decimal<Irrational>

const subtractPitch = <T extends NumericProperties, U extends NumericProperties>(
    minuendPitch: ScaledVector<T>,
    subtrahendPitch: ScaledVector<U>,
): Cents => subtract(computeCentsFromPitch(minuendPitch), computeCentsFromPitch(subtrahendPitch))

export { dividePitch, subtractPitch, computePitchFromCents, computeCentsFromPitch }
