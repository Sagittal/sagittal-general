import {Decimal, NumericProperties} from "../../numeric"
import {Max} from "../../types"
import {Prime} from "../types"
import {computeRationalDecimalSmoothness} from "./smoothness"

// Greatest Prime Factor

const computeRationalDecimalGpf = <T extends NumericProperties>(
    rationalDecimal: Decimal<{rational: true}>,
): Max<Prime<T>> =>
    computeRationalDecimalSmoothness(rationalDecimal) as Decimal<{integer: true}> as Max<Prime<T>>

export {
    computeRationalDecimalGpf,
}
