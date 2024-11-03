import { Override } from "../../../code"
import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumericProperties } from "../types"
import { Decimal } from "./types"

const isDecimalSuper = <T extends NumericProperties>(
    candidateSuperDecimal: Decimal<Omit<T, "direction">>,
): candidateSuperDecimal is Decimal<Override<T, "direction", Direction.SUPER>> =>
    candidateSuperDecimal > MULTIPLICATIVE_IDENTITY

const isDecimalSub = <T extends NumericProperties>(
    candidateSubDecimal: Decimal<Omit<T, "direction">>,
): candidateSubDecimal is Decimal<Override<T, "direction", Direction.SUB>> =>
    candidateSubDecimal < MULTIPLICATIVE_IDENTITY

const isDecimalUnison = <T extends NumericProperties>(
    candidateUnisonDecimal: Decimal<Omit<T, "direction">>,
): candidateUnisonDecimal is Decimal<Override<T, "direction", Direction.SUB>> =>
    candidateUnisonDecimal === MULTIPLICATIVE_IDENTITY

const computeSuperDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "direction">>,
): Decimal<Override<T, "direction", Direction.SUPER>> =>
    (isDecimalSuper(decimal) ? decimal : invertDecimal(decimal)) as Decimal<
        Override<T, "direction", Direction.SUPER>
    >

const computeSubDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "direction">>,
): Decimal<Override<T, "direction", Direction.SUB>> =>
    (isDecimalSub(decimal) ? decimal : invertDecimal(decimal)) as Decimal<
        Override<T, "direction", Direction.SUB>
    >

const invertDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "direction">>,
): Decimal<Override<T, "direction", undefined>> =>
    (1 / decimal) as Decimal<Override<T, "direction", undefined>>

export {
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    invertDecimal,
    computeSubDecimal,
    computeSuperDecimal,
}
