import {Quotient} from "../quotient"
import {NumericProperties} from "../types"
import {Decimal} from "./types"

const computeDecimalFromQuotient = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T>,
): Decimal<T> =>
    numerator / denominator as Decimal<T>

export {
    computeDecimalFromQuotient,
}
