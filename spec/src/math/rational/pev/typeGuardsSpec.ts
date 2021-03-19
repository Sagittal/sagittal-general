import {isPevRational, Pev} from "../../../../../src"
import {isPevInteger} from "../../../../../src/math/rational/pev/typeGuards"

describe("isPevInteger", (): void => {
    it("returns true if every prime exponent is positive or zero", (): void => {
        const candidateIntegerPev = [0, 2, 0, 1] as Pev<{rational: true}>

        const actual = isPevInteger(candidateIntegerPev)

        expect(actual).toBeTruthy()
    })

    it("returns false if every prime exponent is negative or zero", (): void => {
        const candidateIntegerPev = [-3, 0, -5] as Pev<{rational: true}>

        const actual = isPevInteger(candidateIntegerPev)

        expect(actual).toBeFalsy()
    })

    it("returns false if the prime exponents are not all positive or zero or all negative or zero", (): void => {
        const candidateIntegerPev = [-2, 0, 1] as Pev<{rational: true}>

        const actual = isPevInteger(candidateIntegerPev)

        expect(actual).toBeFalsy()
    })

    it("returns false if any of the prime exponents are not integer decimals", (): void => {
        const candidateIntegerPev = [0, 2.5, 0, 1] as Pev<{rational: true}>

        const actual = isPevInteger(candidateIntegerPev)

        expect(actual).toBeFalsy()
    })
})

describe("isPevRational", (): void => {
    it("returns true if every prime exponent is an integer", (): void => {
        const candidateRationalPev = [0, 2, 0, 1] as Pev<{rational: true}>

        const actual = isPevRational(candidateRationalPev)

        expect(actual).toBeTruthy()
    })

    it("returns true if any prime exponent is not an integer", (): void => {
        const candidateRationalPev = [2.5, 1.5, 0] as Pev<{rational: true}>

        const actual = isPevRational(candidateRationalPev)

        expect(actual).toBeFalsy()
    })
})
