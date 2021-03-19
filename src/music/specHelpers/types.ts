import {Decimal, Pev, NumericProperties, Spev} from "../../math"
import {Cents} from "../types"

type PitchExpectation<T extends NumericProperties = {}> = {
    pitch: Spev<T>,
    cents: Cents,
    decimal: Decimal<T>,
    pev: Pev<T>,
}

export {
    PitchExpectation,
}
