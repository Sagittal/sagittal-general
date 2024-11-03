import { NoProperties, Override } from "../../../code"
import { NumericProperties, NumericPropertyEffects, Vector, Quotient } from "../../../math"
import { Degree } from "../../../types"

type ScaledVector<T extends NumericProperties = NoProperties> =
    | ({
          vector: Vector<Override<T, "rational", true>>
          scaler: never
      } & NumericPropertyEffects<Override<T, "rational", true>>)
    | ({
          vector: Vector<Override<T, "rational", true>>
          scaler: Quotient | Degree
      } & NumericPropertyEffects<Override<T, "rational", false>>)

export { ScaledVector }
