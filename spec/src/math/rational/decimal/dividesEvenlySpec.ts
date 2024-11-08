import { Decimal, dividesEvenly, Integer, isEven, isOdd } from "../../../../../src/math"

describe("dividesEvenly", (): void => {
    it("returns the whole version of the type passed to it", (): void => {
        const integer = 5 as Decimal<Integer>
        const modulus = 2 as Decimal<Integer>

        const actual = dividesEvenly(integer, modulus)

        expect(actual).toBeFalsy()
    })
})

describe("isEven", (): void => {
    it("returns true if even", (): void => {
        const integer = 10 as Decimal<Integer>

        const actual = isEven(integer)

        expect(actual).toBeTruthy()
    })

    it("returns false if odd", (): void => {
        const integer = 11 as Decimal<Integer>

        const actual = isEven(integer)

        expect(actual).toBeFalsy()
    })
})

describe("isOdd", (): void => {
    it("returns false if even", (): void => {
        const integer = 10 as Decimal<Integer>

        const actual = isOdd(integer)

        expect(actual).toBeFalsy()
    })

    it("returns true if odd", (): void => {
        const integer = 11 as Decimal<Integer>

        const actual = isOdd(integer)

        expect(actual).toBeTruthy()
    })
})
