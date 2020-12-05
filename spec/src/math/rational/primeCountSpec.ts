import {computePrimeCount, Count, finalElement, log, Prime, PRIMES, round} from "../../../../src"

describe("computePrimeCount", (): void => {
    it("is the π function, returning the count of primes less than or equal to a number", (): void => {
        expect(computePrimeCount(1)).toBe(0 as Count<Prime>)
        expect(computePrimeCount(2)).toBe(1 as Count<Prime>)
        expect(computePrimeCount(3)).toBe(2 as Count<Prime>)
        expect(computePrimeCount(4)).toBe(2 as Count<Prime>)
        expect(computePrimeCount(5)).toBe(3 as Count<Prime>)
        expect(computePrimeCount(6)).toBe(3 as Count<Prime>)
        expect(computePrimeCount(7)).toBe(4 as Count<Prime>)
        expect(computePrimeCount(8)).toBe(4 as Count<Prime>)
        expect(computePrimeCount(9)).toBe(4 as Count<Prime>)
        expect(computePrimeCount(10)).toBe(4 as Count<Prime>)
        expect(computePrimeCount(11)).toBe(5 as Count<Prime>)
        expect(computePrimeCount(60)).toBe(17 as Count<Prime>)
    })

    it("the prime count can be approximated by ~1/ln(n)", (): void => {
        const number = 8368818

        const actual = computePrimeCount(number)

        const expected = number / log(number)
        expect(round(actual / expected)).toBe(1)
    })

    it("throws an error if requested for a number greater than the greatest prime", (): void => {
        const number = finalElement(PRIMES) + 1

        expect((): void => {
            computePrimeCount(number)
        }).toThrowError("Cannot compute exact prime count for numbers greater than 9999991, the largest prime currently recognized.")
    })
})
