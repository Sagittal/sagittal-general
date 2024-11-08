import { Decimal, Integer, Rational } from "../../numeric"
import { Max } from "../../types"
import { Prime } from "../types"
import { computeRationalDecimalSmoothness } from "./smoothness"

// Greatest Prime Factor

const computeRationalDecimalGpf = <T extends Rational>(rationalDecimal: Decimal<T>): Max<Prime<T>> =>
    computeRationalDecimalSmoothness(rationalDecimal) as Decimal<Integer> as Max<Prime<T>>

export { computeRationalDecimalGpf }
