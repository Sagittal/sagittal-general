import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Super, NumericProperties, Sub, AnyDirection } from "../types"
import { Decimal } from "./types"

const isDecimalSuper = <T extends NumericProperties>(
    candidateSuperDecimal: Decimal<T>,
): candidateSuperDecimal is Decimal<T & Super> => candidateSuperDecimal > MULTIPLICATIVE_IDENTITY

const isDecimalSub = <T extends NumericProperties>(
    candidateSubDecimal: Decimal<T>,
): candidateSubDecimal is Decimal<T & Sub> => candidateSubDecimal < MULTIPLICATIVE_IDENTITY

const isDecimalUnison = <T extends NumericProperties>(
    candidateUnisonDecimal: Decimal<T>,
): candidateUnisonDecimal is Decimal<T & Sub> => candidateUnisonDecimal === MULTIPLICATIVE_IDENTITY

const computeSuperDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Super> =>
    isDecimalSuper(decimal) ? decimal : invertDecimal(decimal)

const computeSubDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Sub> =>
    isDecimalSub(decimal) ? decimal : invertDecimal(decimal)

const invertDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & AnyDirection> =>
    (1 / decimal) as Decimal<T & AnyDirection>

export {
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    invertDecimal,
    computeSubDecimal,
    computeSuperDecimal,
}
