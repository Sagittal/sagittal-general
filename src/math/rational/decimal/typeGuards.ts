import { DEFAULT_PRECISION } from "../../../code"
import { dividesEvenly } from "../../dividesEvenly"
import { Decimal, NumericProperties } from "../../numeric"
import { round } from "../../typedOperations"
import { Integer, Rational } from "../types"

const isDecimalRational = <T extends NumericProperties>(
    candidateRationalDecimal: Decimal<T>,
): candidateRationalDecimal is Decimal<T & Rational> =>
    candidateRationalDecimal === round(candidateRationalDecimal, DEFAULT_PRECISION)

const isDecimalInteger = <T extends NumericProperties>(
    candidateIntegerDecimal: Decimal<T>,
): candidateIntegerDecimal is Decimal<T & Integer> => dividesEvenly(candidateIntegerDecimal, 1)

export { isDecimalRational, isDecimalInteger }
