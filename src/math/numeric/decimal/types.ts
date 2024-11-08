import { NoProperties } from "../../../code"
import { Rough, Smooth } from "../../rational"
import {
    NumericProperties,
    UnknownDirection,
    UnknownIntegrality,
    UnknownRationality,
    UnknownSign,
} from "../types"

type Decimal<T extends NumericProperties = NoProperties> = T extends
    | UnknownIntegrality
    | UnknownRationality
    | UnknownDirection
    | UnknownSign
    | Rough<unknown>
    | Smooth<unknown>
    ? number & T
    : number

export { Decimal }
