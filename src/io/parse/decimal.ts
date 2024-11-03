import { Decimal, Integer } from "../../math"
import { Io } from "../types"

const parseDecimal = (decimalIo: Io): Decimal => parseFloat(decimalIo)

const parseInteger = (integerIo: Io): Decimal<Integer> => parseInt(integerIo)

export { parseDecimal, parseInteger }
