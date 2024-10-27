import {
    computeLesserPrimeCount,
    Count,
    log,
    slowTestOnlyRunInFullSuite,
    Prime,
    round,
} from "../../../../src"

describe("computeLesserPrimeCount", (): void => {
    it("is the π function, returning the count of primes less than or equal to a number", (): void => {
        expect(computeLesserPrimeCount(1)).toBe(0 as Count<Prime>)
        expect(computeLesserPrimeCount(2)).toBe(1 as Count<Prime>)
        expect(computeLesserPrimeCount(3)).toBe(2 as Count<Prime>)
        expect(computeLesserPrimeCount(4)).toBe(2 as Count<Prime>)
        expect(computeLesserPrimeCount(5)).toBe(3 as Count<Prime>)
        expect(computeLesserPrimeCount(6)).toBe(3 as Count<Prime>)
        expect(computeLesserPrimeCount(7)).toBe(4 as Count<Prime>)
        expect(computeLesserPrimeCount(8)).toBe(4 as Count<Prime>)
        expect(computeLesserPrimeCount(9)).toBe(4 as Count<Prime>)
        expect(computeLesserPrimeCount(10)).toBe(4 as Count<Prime>)
        expect(computeLesserPrimeCount(11)).toBe(5 as Count<Prime>)
        expect(computeLesserPrimeCount(60)).toBe(17 as Count<Prime>)
    })

    it("the prime count can be approximated by ~1/ln(n)", (): void => {
        slowTestOnlyRunInFullSuite()
        const number = 262121
        const actual = computeLesserPrimeCount(number)
        const expected = number / log(number)
        expect(round(actual / expected)).toBe(1)
    })
})
