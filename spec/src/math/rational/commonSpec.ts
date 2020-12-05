import {Decimal, Divisor} from "../../../../src"
import {computeGreatestCommonDivisor} from "../../../../src/math/rational"
import {computeLeastCommonMultiple} from "../../../../src/math/rational/common"

describe("common", (): void => {
    describe("greatest divisor", (): void => {
        it("works", (): void => {
            expect(computeGreatestCommonDivisor(16 as Decimal<{integer: true}>, 24 as Decimal<{integer: true}>))
                .toBe(8 as Divisor<Decimal<{integer: true}>>)
        })

        it("works for co-prime numbers", (): void => {
            expect(computeGreatestCommonDivisor(5 as Decimal<{integer: true}>, 8 as Decimal<{integer: true}>))
                .toBe(1 as Divisor<Decimal<{integer: true}>>)
        })

        it("works when one number is itself the GCD", (): void => {
            expect(computeGreatestCommonDivisor(3 as Decimal<{integer: true}>, 6 as Decimal<{integer: true}>))
                .toBe(3 as Divisor<Decimal<{integer: true}>>)
        })

        it("works for more than two numbers", (): void => {
            expect(computeGreatestCommonDivisor(
                12 as Decimal<{integer: true}>,
                16 as Decimal<{integer: true}>,
                20 as Decimal<{integer: true}>,
            ))
                .toBe(4 as Divisor<Decimal<{integer: true}>>)
        })

        it("works for one number", (): void => {
            expect(computeGreatestCommonDivisor(7 as Decimal<{integer: true}>))
                .toBe(7 as Divisor<Decimal<{integer: true}>>)
        })

        it("works for zero numbers", (): void => {
            expect(computeGreatestCommonDivisor())
                .toBe(1 as Divisor<Decimal<{integer: true}>>)
        })
    })

    describe("least multiple", (): void => {
        it("works", (): void => {
            expect(computeLeastCommonMultiple(16 as Decimal<{integer: true}>, 24 as Decimal<{integer: true}>))
                .toBe(48 as Decimal<{integer: true}>)
        })

        it("works for co-prime numbers", (): void => {
            expect(computeLeastCommonMultiple(5 as Decimal<{integer: true}>, 8 as Decimal<{integer: true}>))
                .toBe(40 as Decimal<{integer: true}>)

        })

        it("works when one number is itself the LCM", (): void => {
            expect(computeLeastCommonMultiple(3 as Decimal<{integer: true}>, 6 as Decimal<{integer: true}>))
                .toBe(6 as Decimal<{integer: true}>)
        })

        it("works for more than two numbers", (): void => {
            expect(computeLeastCommonMultiple(
                12 as Decimal<{integer: true}>,
                16 as Decimal<{integer: true}>,
                20 as Decimal<{integer: true}>,
            ))
                .toBe(240 as Decimal<{integer: true}>)
        })

        it("works for one number", (): void => {
            expect(computeLeastCommonMultiple(7 as Decimal<{integer: true}>))
                .toBe(7 as Decimal<{integer: true}>)
        })

        it("works for zero numbers", (): void => {
            expect(computeLeastCommonMultiple())
                .toBe(1 as Decimal<{integer: true}>)
        })

        it("works for very large numbers", (): void => {
            expect(
                computeLeastCommonMultiple(
                    43999999560 as Decimal<{integer: true}>,
                    43999999560 as Decimal<{integer: true}>,
                    43999999560 as Decimal<{integer: true}>,
                    43999999560 as Decimal<{integer: true}>,
                    43999999560 as Decimal<{integer: true}>,
                    43999999560 as Decimal<{integer: true}>),
            )
                .toBe(43999999560 as Decimal<{integer: true}>)
        })
    })
})
