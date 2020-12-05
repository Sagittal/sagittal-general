import {Decimal, Monzo, NumericProperties, Scamon} from "../../math"
import {Cents} from "../types"

type PitchExpectation<T extends NumericProperties = {}> = {
    pitch: Scamon<T>,
    cents: Cents,
    decimal: Decimal<T>,
    monzo: Monzo<T>,
}

export {
    PitchExpectation,
}
