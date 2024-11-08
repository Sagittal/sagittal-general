import { Decimal, Divisor, Integer } from "../../../../src"
import { computeGreatestCommonDivisor } from "../../../../src/math/rational"
import { computeLeastCommonMultiple } from "../../../../src/math/rational/common"

describe("common", (): void => {
    describe("greatest divisor", (): void => {
        it("works", (): void => {
            expect(computeGreatestCommonDivisor(16 as Decimal<Integer>, 24 as Decimal<Integer>)).toBe(
                8 as Divisor<Decimal<Integer>>,
            )
        })

        it("works for co-prime numbers", (): void => {
            expect(computeGreatestCommonDivisor(5 as Decimal<Integer>, 8 as Decimal<Integer>)).toBe(
                1 as Divisor<Decimal<Integer>>,
            )
        })

        it("works when one number is itself the GCD", (): void => {
            expect(computeGreatestCommonDivisor(3 as Decimal<Integer>, 6 as Decimal<Integer>)).toBe(
                3 as Divisor<Decimal<Integer>>,
            )
        })

        it("works for more than two numbers", (): void => {
            expect(
                computeGreatestCommonDivisor(
                    12 as Decimal<Integer>,
                    16 as Decimal<Integer>,
                    20 as Decimal<Integer>,
                ),
            ).toBe(4 as Divisor<Decimal<Integer>>)
        })

        it("works for one number", (): void => {
            expect(computeGreatestCommonDivisor(7 as Decimal<Integer>)).toBe(7 as Divisor<Decimal<Integer>>)
        })

        it("works for zero numbers", (): void => {
            expect(computeGreatestCommonDivisor()).toBe(1 as Divisor<Decimal<Integer>>)
        })
    })

    describe("least multiple", (): void => {
        it("works", (): void => {
            expect(computeLeastCommonMultiple(16 as Decimal<Integer>, 24 as Decimal<Integer>)).toBe(
                48 as Decimal<Integer>,
            )
        })

        it("works for co-prime numbers", (): void => {
            expect(computeLeastCommonMultiple(5 as Decimal<Integer>, 8 as Decimal<Integer>)).toBe(
                40 as Decimal<Integer>,
            )
        })

        it("works when one number is itself the LCM", (): void => {
            expect(computeLeastCommonMultiple(3 as Decimal<Integer>, 6 as Decimal<Integer>)).toBe(
                6 as Decimal<Integer>,
            )
        })

        it("works for more than two numbers", (): void => {
            expect(
                computeLeastCommonMultiple(
                    12 as Decimal<Integer>,
                    16 as Decimal<Integer>,
                    20 as Decimal<Integer>,
                ),
            ).toBe(240 as Decimal<Integer>)
        })

        it("works for one number", (): void => {
            expect(computeLeastCommonMultiple(7 as Decimal<Integer>)).toBe(7 as Decimal<Integer>)
        })

        it("works for zero numbers", (): void => {
            expect(computeLeastCommonMultiple()).toBe(1 as Decimal<Integer>)
        })

        it("works for very large numbers", (): void => {
            expect(
                computeLeastCommonMultiple(
                    43999999560 as Decimal<Integer>,
                    43999999560 as Decimal<Integer>,
                    43999999560 as Decimal<Integer>,
                    43999999560 as Decimal<Integer>,
                    43999999560 as Decimal<Integer>,
                    43999999560 as Decimal<Integer>,
                ),
            ).toBe(43999999560 as Decimal<Integer>)
        })
    })
})
