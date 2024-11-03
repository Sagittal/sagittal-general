import { Decimal } from "../../math"
import { Ed, Window } from "../../types"

type EdoStep = Decimal & { _EdoStepBrand: boolean }

type Edo = Ed<{ of: Window<{ of: 2 }> }> & EdoStep

export { Edo, EdoStep }
