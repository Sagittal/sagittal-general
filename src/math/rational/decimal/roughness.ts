import {increment} from "../../../code"
import {Index} from "../../../types"
import {dividesEvenly} from "../../dividesEvenly"
import {Decimal, mod, NumericProperties} from "../../numeric"
import {computeRoughnessIndex} from "../primeCount"
import {computePrimes, MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED} from "../primes"
import {Prime, Primes, Roughness} from "../types"
import {integerDivide} from "./typedOperations"

const isIntegerDecimalRough = (integerDecimal: Decimal<{integer: true}>, roughness: Roughness): boolean => {
    let isRough = true

    const primes = computePrimes(integerDecimal)

    let index = 0 as Index<Prime>
    while (true) {
        const prime = primes[index]
        if (prime >= roughness) {
            break
        }

        if (mod(integerDecimal, prime) === 0) {
            isRough = false
            break
        }

        index = increment(index)
    }

    return isRough
}

const computeRoughIntegerDecimal = <S extends Primes, T extends NumericProperties, U extends unknown>(
    integerDecimal: U & Decimal<T & {integer: true}>,
    roughness: S & Roughness,
): U & Decimal<T & {integer: true, rough: S}> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    const primes = computePrimes(integerDecimal > MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal)

    let roughIntegerDecimal = integerDecimal
    let primeIndex = 0
    while (primeIndex < roughnessIndex) {
        const prime: Decimal<{integer: true}> = primes[primeIndex]
        while (dividesEvenly(roughIntegerDecimal, prime)) {
            roughIntegerDecimal =
                integerDivide(roughIntegerDecimal, prime) as U & Decimal<T & {integer: true}>
        }

        primeIndex = increment(primeIndex)
    }

    return roughIntegerDecimal as U & Decimal<T & {integer: true, rough: S}>
}

export {
    isIntegerDecimalRough,
    computeRoughIntegerDecimal,
}
