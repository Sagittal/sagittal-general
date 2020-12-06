import {increment, Max, Prime} from "../../../../src"
import {computePrimes, MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED, PRIMES} from "../../../../src/math/rational/primes"

describe("computePrimes", (): void => {
    it("returns the primes up to the requested number", (): void => {
        const maxPossiblePrime = 1100 as Max

        const actual = computePrimes(maxPossiblePrime)

        const expected = [
            ...PRIMES,
            1009,
            1013,
            1019,
            1021,
            1031,
            1033,
            1039,
            1049,
            1051,
            1061,
            1063,
            1069,
            1087,
            1091,
            1093,
            1097,
        ] as Prime[]
        expect(actual).toEqual(expected)
    })

    it("returns the primes up to 1000 if unspecified", (): void => {
        const actual = computePrimes()

        expect(actual).toEqual(PRIMES)
    })

    it("can return primes up 125000000", (): void => {
        const maxPossiblePrime = increment(MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED)

        expect((): void => {
            computePrimes(maxPossiblePrime)
        }).toThrowError("Cannot compute primes greater than 125000000; 125000001 was requested.")
    })
})
