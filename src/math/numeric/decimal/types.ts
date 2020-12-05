import {NumericProperties, NumericPropertyEffects} from "../types"

type Decimal<T extends NumericProperties = {}> = number & NumericPropertyEffects<T>

export {
    Decimal,
}
