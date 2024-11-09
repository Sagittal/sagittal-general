import { Decimal, Integer, NumericProperties } from "../../math"
import { Ed, Window } from "../../types"

type EdoStep<T extends NumericProperties = Integer> = Decimal<T> & { _EdoStepBrand: boolean }

type Edo = Ed<{ of: Window<{ of: 2 }> }> & EdoStep

export { Edo, EdoStep }
