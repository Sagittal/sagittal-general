import { NumericProperties, NumericPropertyEffects, Vector, Quotient } from "../../../math"
import { Degree } from "../../../types"

type ScaledVector<T extends NumericProperties = {}> =
    | ({
          vector: Vector<T & { rational: true }>
          scaler: never
      } & NumericPropertyEffects<T & { rational: true }>)
    | ({
          vector: Vector<T & { rational: true }>
          scaler: Quotient | Degree
      } & NumericPropertyEffects<T & { rational: false }>)

export { ScaledVector }
