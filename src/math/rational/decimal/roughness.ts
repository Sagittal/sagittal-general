import { increment } from "../../../code"
import { Index } from "../../../types"
import { dividesEvenly } from "../../dividesEvenly"
import { Decimal, NumericProperties } from "../../numeric"
import { computePrimes, MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED } from "../primes"
import { computeRoughnessIndex } from "../roughness"
import { Integer, Prime, Primes, Roughness } from "../types"
import { integerDivide } from "./typedOperations"

const isIntegerDecimalRough = (integerDecimal: Decimal<Integer>, roughness: Roughness): boolean => {
    let isRough = true

    const primes = computePrimes(integerDecimal)

    let index = 0 as Index<Prime>
    while (true) {
        const prime = primes[index]
        if (prime >= roughness) {
            break
        }

        if (dividesEvenly(integerDecimal, prime)) {
            isRough = false
            break
        }

        index = increment(index)
    }

    return isRough
}

const computeRoughIntegerDecimal = <S extends Primes, T extends NumericProperties & Integer>(
    integerDecimal: Decimal<T>,
    roughness: S & Roughness,
): Decimal<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    const primes = computePrimes(
        integerDecimal > MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal,
    )

    let roughIntegerDecimal = integerDecimal
    let primeIndex = 0
    while (primeIndex < roughnessIndex) {
        const prime: Decimal<Integer> = primes[primeIndex]
        while (dividesEvenly(roughIntegerDecimal, prime)) {
            roughIntegerDecimal = integerDivide(roughIntegerDecimal, prime) as Decimal<T & Integer>
        }

        primeIndex = increment(primeIndex)
    }

    return roughIntegerDecimal as Decimal<T & Integer & { rough: S }>
}

export { isIntegerDecimalRough, computeRoughIntegerDecimal }
