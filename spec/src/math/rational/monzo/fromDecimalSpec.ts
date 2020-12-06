import {computeRationalMonzoFromRationalDecimal, Decimal, Monzo} from "../../../../../src"
import {MAX_JS_INTEGER_VALUE} from "../../../../../src/code"
import {computeIntegerMonzoFromIntegerDecimal} from "../../../../../src/math/rational/monzo/fromDecimal"

describe("computeRationalMonzoFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<{rational: true}>      // 7 / 5

        const actual = computeRationalMonzoFromRationalDecimal(rationalDecimal)

        const expected = [0, 0, -1, 1] as Monzo<{rational: true}>     // 7 / 5
        expect(actual).toEqual(expected)
    })
})

describe("computeIntegerMonzoFromIntegerDecimal", (): void => {
    it("prime factors the integer into a monzo", (): void => {
        const integerDecimal = 44 as Decimal<{integer: true}>

        const actual = computeIntegerMonzoFromIntegerDecimal(integerDecimal)

        const expected = [2, 0, 0, 0, 1] as Monzo<{integer: true}>
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factors are too big", (): void => {
        const integerDecimal = 756065159 as Decimal<{integer: true}>

        expect((): void => {
            computeIntegerMonzoFromIntegerDecimal(integerDecimal)
        }).toThrowError("Cannot compute primes greater than 125000000; 756065159 was requested.")
    })

    it("errors if given numbers which contain low primes but are too big", (): void => {
        const integerDecimal = MAX_JS_INTEGER_VALUE + 1 as Decimal<{integer: true}>         // 2^53

        expect((): void => {
            computeIntegerMonzoFromIntegerDecimal(integerDecimal)
        }).toThrowError("This integer 9007199254740992 is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.")
    })
})
