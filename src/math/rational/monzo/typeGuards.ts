import {Monzo, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {isDecimalInteger} from "../decimal"
import {Prime} from "../types"

const isMonzoRational = <T extends NumericProperties>(
    candidateRationalMonzo: Monzo<T>,
): candidateRationalMonzo is Monzo<T & {rational: true}> =>
    candidateRationalMonzo.every((primeExponent: Exponent<Prime>): boolean => isDecimalInteger(primeExponent))

const isMonzoInteger = <T extends NumericProperties>(
    candidateIntegerMonzo: Monzo<T>,
): candidateIntegerMonzo is Monzo<T & {integer: true}> =>
    isMonzoRational(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)

export {
    isMonzoInteger,
    isMonzoRational,
}
