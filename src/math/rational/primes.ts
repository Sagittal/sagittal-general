import {finalElement} from "../../code"
import {Max} from "../types"
import {Prime} from "./types"

let primes = [] as Prime[]

const computePrimes = (maxPossiblePrime: number | Max = DEFAULT_MAX_POSSIBLE_PRIME): Prime[] => {
    if (maxPossiblePrime <= finalElement(primes)) {
        return primes
    }

    if (maxPossiblePrime > MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED) {
        throw new Error(`Cannot compute primes greater than ${MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED}; ${maxPossiblePrime} was requested.`)
    }

    let primeToGoUpTo = maxPossiblePrime > MAX_MAX_POSSIBLE_PRIME_BEFORE_JUST_COMPUTE_ALL_ABLE ?
        MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED :
        maxPossiblePrime

    const sieve = []
    const extendedPrimes = [] as Prime[]

    for (let i = 2 as Prime; i <= primeToGoUpTo; i++) {
        if (!sieve[i]) {
            extendedPrimes.push(i)
            for (let j = i << 1; j <= primeToGoUpTo; j += i) {
                sieve[j] = true
            }
        }
    }

    primes = extendedPrimes

    return primes
}

const DEFAULT_MAX_POSSIBLE_PRIME = 1000

const MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = 100000000 as Max

const MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = 26

const MAX_MAX_POSSIBLE_PRIME_BEFORE_JUST_COMPUTE_ALL_ABLE = 100000

export {
    MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED,
    MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED,
    computePrimes,
}
