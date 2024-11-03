import { Decimal, NumericProperties } from "../../numeric"
import { Max } from "../../types"
import { Integer, Prime, Rational } from "../types"
import { computeRationalDecimalSmoothness } from "./smoothness"

// Greatest Prime Factor

const computeRationalDecimalGpf = <T extends NumericProperties>(
    rationalDecimal: Decimal<Rational>,
): Max<Prime<T>> => computeRationalDecimalSmoothness(rationalDecimal) as Decimal<Integer> as Max<Prime<T>>

export { computeRationalDecimalGpf }
