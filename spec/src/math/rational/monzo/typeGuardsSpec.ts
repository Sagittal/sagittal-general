import {isMonzoRational, Monzo} from "../../../../../src"
import {isMonzoInteger} from "../../../../../src/math/rational/monzo/typeGuards"

describe("isMonzoInteger", (): void => {
    it("returns true if every prime exponent is positive or zero", (): void => {
        const candidateIntegerMonzo = [0, 2, 0, 1] as Monzo<{rational: true}>

        const actual = isMonzoInteger(candidateIntegerMonzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if every prime exponent is negative or zero", (): void => {
        const candidateIntegerMonzo = [-3, 0, -5] as Monzo<{rational: true}>

        const actual = isMonzoInteger(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if the prime exponents are not all positive or zero or all negative or zero", (): void => {
        const candidateIntegerMonzo = [-2, 0, 1] as Monzo<{rational: true}>

        const actual = isMonzoInteger(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if any of the prime exponents are not integer decimals", (): void => {
        const candidateIntegerMonzo = [0, 2.5, 0, 1] as Monzo<{rational: true}>

        const actual = isMonzoInteger(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })
})

describe("isMonzoRational", (): void => {
    it("returns true if every prime exponent is an integer", (): void => {
        const candidateRationalMonzo = [0, 2, 0, 1] as Monzo<{rational: true}>

        const actual = isMonzoRational(candidateRationalMonzo)

        expect(actual).toBeTruthy()
    })

    it("returns true if any prime exponent is not an integer", (): void => {
        const candidateRationalMonzo = [2.5, 1.5, 0] as Monzo<{rational: true}>

        const actual = isMonzoRational(candidateRationalMonzo)

        expect(actual).toBeFalsy()
    })
})
