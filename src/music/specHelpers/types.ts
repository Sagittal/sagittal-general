import { NoProperties } from "../../code"
import { Decimal, Vector, NumericProperties, ScaledVector, Integer } from "../../math"
import { Cents } from "../types"

type PitchExpectation<
    T extends NumericProperties = NoProperties,
    O extends { of?: number } = { of: number },
    U extends NumericProperties = Integer,
> = {
    pitch: ScaledVector<T, O, U>
    cents: Cents
    decimal: Decimal<T>
    vector: Vector<T>
}

export { PitchExpectation }
