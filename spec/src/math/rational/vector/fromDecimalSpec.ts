import {
    computeRationalVectorFromRationalDecimal,
    Decimal,
    Integer,
    Rational,
    Vector,
} from "../../../../../src"
import { MAX_JS_INTEGER_VALUE } from "../../../../../src/code"
import { computeIntegerVectorFromIntegerDecimal } from "../../../../../src/math/rational/vector/fromDecimal"

describe("computeRationalVectorFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<Rational> // 7 / 5

        const actual = computeRationalVectorFromRationalDecimal(rationalDecimal)

        const expected = [0, 0, -1, 1] as Vector // 7 / 5
        expect(actual).toEqual(expected)
    })

    it("errors when given a negative number", (): void => {
        const rationalDecimal = -2 as Decimal<Rational>

        expect((): void => {
            computeRationalVectorFromRationalDecimal(rationalDecimal)
        }).toThrowError("Cannot convert -2 to a vector because it is negative.")
    })
})

describe("computeIntegerVectorFromIntegerDecimal", (): void => {
    it("prime factors the integer into a vector", (): void => {
        const integerDecimal = 44 as Decimal<Integer>

        const actual = computeIntegerVectorFromIntegerDecimal(integerDecimal)

        const expected = [2, 0, 0, 0, 1] as Vector<Integer>
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factors are too big", (): void => {
        const integerDecimal = 756065159 as Decimal<Integer>

        expect((): void => {
            computeIntegerVectorFromIntegerDecimal(integerDecimal)
        }).toThrowError("This integer 756065159 contains primes which are too big; remainder is 756065159")
    })

    it("errors if given numbers which contain low primes but are too big", (): void => {
        const integerDecimal = MAX_JS_INTEGER_VALUE + 1 // 2^53

        expect((): void => {
            computeIntegerVectorFromIntegerDecimal(integerDecimal)
        }).toThrowError(
            "This integer 9007199254740992 is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.",
        )
    })
})
