import {finalElement} from "../../code"
import {Count, Index} from "../../types"
import {Decimal} from "../numeric"
import {SMOOTH_ROUGH_OFFSET} from "./constants"
import {computePrimes, MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED} from "./primes"
import {Prime, Roughness, Smoothness} from "./types"

// Prime Counting Function (π)
// See: https://mathworld.wolfram.com/PrimeCountingFunction.html

const computePrimeCount = (number: number): Count<Prime> => {
    const primes = computePrimes(number + MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED)

    const count = primes.findIndex((prime: Prime): boolean => prime > number)

    return count as Count<Prime>
}

const computeRoughnessIndex = (roughness: Roughness): Index<Prime> => {
    const primes = computePrimes()

    const index = primes.findIndex((prime: Prime): boolean => prime >= roughness)

    if (index === -1) {
        throw new Error(`Cannot compute roughness index for numbers greater than ${finalElement(primes)}, the largest prime currently recognized.`)
    }

    return index as Index<Prime>
}

const computeSmoothnessIndex = (smoothness: Smoothness): Index<Prime> =>
    computeRoughnessIndex(smoothness as Decimal<{integer: true}> as Roughness) + SMOOTH_ROUGH_OFFSET as Index<Prime>

export {
    computePrimeCount,
    computeRoughnessIndex,
    computeSmoothnessIndex,
}
