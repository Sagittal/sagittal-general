import { finalElement } from "../../code"
import { Index } from "../../types"
import { computePrimes } from "./primes"
import { Prime, Roughness } from "./types"

const computeRoughnessIndex = (roughness: Roughness): Index<Prime> => {
    const primes = computePrimes()

    const index = primes.findIndex((prime: Prime): boolean => prime >= roughness)

    if (index === -1) {
        throw new Error(
            `Cannot compute roughness index for numbers greater than ${finalElement(
                primes,
            )}, the largest prime currently recognized.`,
        )
    }

    return index as Index<Prime>
}

export { computeRoughnessIndex }
