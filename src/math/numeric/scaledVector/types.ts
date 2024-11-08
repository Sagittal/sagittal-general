import { NoProperties } from "../../../code"
import { NumericProperties, Vector, Quotient, Rational, Irrational } from "../../../math"
import { Degree } from "../../../types"

type ScaledVector<T extends NumericProperties = NoProperties> =
    | ({
          vector: Vector<T & Rational>
          scaler: never
      } & T &
          Rational)
    | ({
          vector: Vector<T & Rational>
          scaler: Quotient | Degree
      } & T &
          Irrational)

export { ScaledVector }
