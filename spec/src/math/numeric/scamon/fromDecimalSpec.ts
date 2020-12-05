import {
    computeScamonFromDecimal,
    computeScamonFromQuotient,
    Decimal,
    Monzo,
    Quotient,
    Scamon,
} from "../../../../../src"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../src/math/irrational/scamon/constants"

describe("computeScamonFromDecimal", (): void => {
    it("when given a rational decimal, returns a rational scamon", (): void => {
        const rationalDecimal = 84 as Decimal<{rational: true}>

        const actual = computeScamonFromDecimal(rationalDecimal)

        const expected = {
            monzo: [2, 1, 0, 1] as Monzo<{rational: true}>,
        } as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational decimal, returns a scamon which includes it as a power of 2, with the base 2 as the monzo and exponent as the scaler quotient (the log over 1)", (): void => {
        const decimal = 84.458901 as Decimal<{rational: false}>

        const actual = computeScamonFromDecimal(decimal)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a decimal which is not identified as rational or irrational, but can be construed as rational, returns a rational scamon", (): void => {
        const decimal = 15.94323 as Decimal

        const actual = computeScamonFromDecimal(decimal)

        const expected = {
            monzo: [-5, 13, -5],
        } as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("computeScamonFromQuotient", (): void => {
    it("when given a rational quotient, returns a rational scamon", (): void => {
        const quotient = [4, 3] as Quotient<{rational: true}>

        const actual = computeScamonFromQuotient(quotient)

        const expected = {monzo: [2, -1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational quotient, returns a irrational scamon", (): void => {
        const quotient = [4.346, 3.23211] as Quotient<{rational: false}>

        const actual = computeScamonFromQuotient(quotient)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.427212, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
