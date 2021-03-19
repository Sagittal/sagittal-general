import {Pev, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {isDecimalInteger} from "../decimal"
import {Prime} from "../types"

const isPevRational = <T extends NumericProperties>(
    candidateRationalPev: Pev<T>,
): candidateRationalPev is Pev<T & {rational: true}> =>
    candidateRationalPev.every((primeExponent: Exponent<Prime>): boolean => isDecimalInteger(primeExponent))

const isPevInteger = <T extends NumericProperties>(
    candidateIntegerPev: Pev<T>,
): candidateIntegerPev is Pev<T & {integer: true}> =>
    isPevRational(candidateIntegerPev) &&
    candidateIntegerPev.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)

export {
    isPevInteger,
    isPevRational,
}
