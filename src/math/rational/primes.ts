import {finalElement} from "../../code"
import {Max} from "../types"
import {Prime} from "./types"

let primes = [] as Prime[]

const computePrimes = (maxPossiblePrime: number | Max = DEFAULT_MAX_POSSIBLE_PRIME): Prime[] => {
    if (maxPossiblePrime > MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED) {
        throw new Error(`Cannot compute primes greater than ${MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED}; ${maxPossiblePrime} was requested.`)
    }

    if (maxPossiblePrime <= finalElement(primes)) {
        return primes
    }

    const sieve = []
    const extendedPrimes = [] as Prime[]

    for (let i = 2 as Prime; i <= maxPossiblePrime; i++) {
        if (!sieve[i]) {
            extendedPrimes.push(i)
            for (let j = i << 1; j <= maxPossiblePrime; j += i) {
                sieve[j] = true
            }
        }
    }

    primes = extendedPrimes

    return primes
}

const DEFAULT_MAX_POSSIBLE_PRIME = 1000

const MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = 125000000 as Max

const MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = 26

export {
    MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED,
    MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED,
    computePrimes,
}
