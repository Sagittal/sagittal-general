import {Quotient} from "../../../../../src"
import {isQuotientInteger, isQuotientRational} from "../../../../../src/math/rational/quotient/typeGuards"

describe("isQuotientInteger", (): void => {
    it("returns true if the denominator divides evenly into the numerator", (): void => {
        const candidateIntegerQuotient = [77, 11] as Quotient<{rational: true}>

        const actual = isQuotientInteger(candidateIntegerQuotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if the denominator does not divide evenly into the numerator", (): void => {
        const candidateIntegerQuotient = [77, 10] as Quotient<{rational: true}>

        const actual = isQuotientInteger(candidateIntegerQuotient)

        expect(actual).toBeFalsy()
    })
})

describe("isQuotientRational", (): void => {
    it("returns true if the quotient is rational", (): void => {
        const candidateRationalQuotient = [11, 6] as Quotient<{rational: true}>

        const actual = isQuotientRational(candidateRationalQuotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if the quotient is irrational", (): void => {
        const candidateRationalQuotient = [11.3, 6.1] as Quotient<{rational: true}>

        const actual = isQuotientRational(candidateRationalQuotient)

        expect(actual).toBeFalsy()
    })
})
