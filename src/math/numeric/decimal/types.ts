import { NoProperties } from "../../../code"
import { NumericProperties, NumericPropertyEffects } from "../types"

type Decimal<T extends NumericProperties = NoProperties> = number & NumericPropertyEffects<T>

export { Decimal }
