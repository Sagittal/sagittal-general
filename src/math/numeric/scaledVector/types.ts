import { NoProperties } from "../../../code"
import { NumericProperties, Vector, Quotient, Rational, Irrational, Integer } from "../../../math"
import { Degree } from "../../../types"

type ScaledVector<
    T extends NumericProperties = NoProperties,
    O extends { of?: number } = { of: number },
    U extends NumericProperties = Integer,
> =
    | ({
          vector: Vector<T & Rational>
          scaler: never
      } & T &
          Rational)
    | ({
          vector: Vector<T & Rational>
          scaler: Quotient | Degree<O, U>
      } & T &
          Irrational)

export { ScaledVector }
