import { DEFAULT_PRECISION } from "../../../code"
import { Decimal, Integer, NumericProperties, Rational } from "../../numeric"
import { round } from "../../typedOperations"
import { dividesEvenly } from "./dividesEvenly"

const isDecimalRational = <T extends NumericProperties>(
    candidateRationalDecimal: Decimal<T>,
): candidateRationalDecimal is Decimal<T & Rational> =>
    candidateRationalDecimal === round(candidateRationalDecimal, DEFAULT_PRECISION)

const isDecimalInteger = <T extends NumericProperties>(
    candidateIntegerDecimal: Decimal<T>,
): candidateIntegerDecimal is Decimal<T & Integer> =>
    dividesEvenly(candidateIntegerDecimal as Decimal<Integer>, 1 as Decimal<Integer>)

export { isDecimalRational, isDecimalInteger }
