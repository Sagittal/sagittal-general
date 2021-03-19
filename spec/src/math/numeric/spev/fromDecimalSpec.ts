import {
    computeSpevFromDecimal,
    computeSpevFromQuotient,
    Decimal,
    IRRATIONAL_SPEV_BASE_PEV,
    Pev,
    onlyRunInCi,
    Quotient,
    Spev,
} from "../../../../../src"

describe("computeSpevFromDecimal", (): void => {
    it("when given a rational decimal, returns a rational spev", (): void => {
        const rationalDecimal = 84 as Decimal<{rational: true}>

        const actual = computeSpevFromDecimal(rationalDecimal)

        const expected = {
            pev: [2, 1, 0, 1] as Pev<{rational: true}>,
        } as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational decimal, returns a spev which includes it as a power of 2, with the base 2 as the pev and exponent as the scaler quotient (the log over 1)", (): void => {
        const decimal = 84.458901 as Decimal<{rational: false}>

        const actual = computeSpevFromDecimal(decimal)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [6.400178, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a decimal which is not identified as rational or irrational, but can be construed as rational, returns a rational spev", (): void => {
        onlyRunInCi()

        const decimal = 15.94323 as Decimal

        const actual = computeSpevFromDecimal(decimal)

        const expected = {
            pev: [-5, 13, -5],
        } as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("computeSpevFromQuotient", (): void => {
    it("when given a rational quotient, returns a rational spev", (): void => {
        const quotient = [4, 3] as Quotient<{rational: true}>

        const actual = computeSpevFromQuotient(quotient)

        const expected = {pev: [2, -1]} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational quotient, returns an irrational spev", (): void => {
        const quotient = [4.346, 3.23211] as Quotient<{rational: false}>

        const actual = computeSpevFromQuotient(quotient)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.427212, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
