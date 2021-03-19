import {computeRationalPevFromRationalDecimal, Decimal, Pev} from "../../../../../src"
import {MAX_JS_INTEGER_VALUE} from "../../../../../src/code"
import {computeIntegerPevFromIntegerDecimal} from "../../../../../src/math/rational/pev/fromDecimal"

describe("computeRationalPevFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<{rational: true}>      // 7 / 5

        const actual = computeRationalPevFromRationalDecimal(rationalDecimal)

        const expected = [0, 0, -1, 1] as Pev<{rational: true}>     // 7 / 5
        expect(actual).toEqual(expected)
    })

    it("errors when given a negative number", (): void => {
        const rationalDecimal = -2 as Decimal<{rational: true}>

        expect((): void => {
            computeRationalPevFromRationalDecimal(rationalDecimal)
        }).toThrowError("Cannot convert -2 to a pev because it is negative.")
    })
})

describe("computeIntegerPevFromIntegerDecimal", (): void => {
    it("prime factors the integer into a pev", (): void => {
        const integerDecimal = 44 as Decimal<{integer: true}>

        const actual = computeIntegerPevFromIntegerDecimal(integerDecimal)

        const expected = [2, 0, 0, 0, 1] as Pev<{integer: true}>
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factors are too big", (): void => {
        const integerDecimal = 756065159 as Decimal<{integer: true}>

        expect((): void => {
            computeIntegerPevFromIntegerDecimal(integerDecimal)
        }).toThrowError("This integer 756065159 contains primes which are too big; remainder is 756065159")
    })

    it("errors if given numbers which contain low primes but are too big", (): void => {
        const integerDecimal = MAX_JS_INTEGER_VALUE + 1 as Decimal<{integer: true}>         // 2^53

        expect((): void => {
            computeIntegerPevFromIntegerDecimal(integerDecimal)
        }).toThrowError("This integer 9007199254740992 is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.")
    })
})
