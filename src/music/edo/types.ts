import { Ed, Window } from "../../types"

type EdoStep = number & { _EdoStepBrand: boolean }

type Edo = Ed<{ of: Window<{ of: 2 }> }> & EdoStep

export { Edo, EdoStep }
