import { Decimal, Integer, negative } from "../math"
import { computeRange } from "./range"
import { Range } from "./types"

const computePlusOrMinusRange = <T extends Decimal<Integer>>(value: T): Range<T> =>
    computeRange(negative(value), (value + 1) as T)

export { computePlusOrMinusRange }
