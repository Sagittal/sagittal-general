import { NoProperties } from "../../code"
import { Decimal, Vector, NumericProperties, ScaledVector } from "../../math"
import { Cents } from "../types"

type PitchExpectation<T extends NumericProperties = NoProperties> = {
    pitch: ScaledVector<T>
    cents: Cents
    decimal: Decimal<T>
    vector: Vector<T>
}

export { PitchExpectation }
