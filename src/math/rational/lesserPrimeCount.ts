import { Count } from "../../types"
import { computePrimes, MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED } from "./primes"
import { Prime } from "./types"

// Prime Counting Function (π)
// See: https://mathworld.wolfram.com/PrimeCountingFunction.html

const computeLesserPrimeCount = (number: number): Count<Prime> => {
    const primes = computePrimes(number + MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED)
    const count = primes.findIndex((prime: Prime): boolean => prime > number)

    return count as Count<Prime>
}

export { computeLesserPrimeCount }
