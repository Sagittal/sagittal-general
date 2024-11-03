import { dividesEvenly, isEven, isOdd } from "../../../src/math"

describe("dividesEvenly", (): void => {
    it("returns the whole version of the type passed to it", (): void => {
        const number = 5
        const modulus = 2

        const actual = dividesEvenly(number, modulus)

        expect(actual).toBeFalsy()
    })
})

describe("isEven", (): void => {
    it("returns true if even", (): void => {
        const number = 10

        const actual = isEven(number)

        expect(actual).toBeTruthy()
    })

    it("returns false if odd", (): void => {
        const number = 11

        const actual = isEven(number)

        expect(actual).toBeFalsy()
    })
})

describe("isOdd", (): void => {
    it("returns false if even", (): void => {
        const number = 10

        const actual = isOdd(number)

        expect(actual).toBeFalsy()
    })

    it("returns true if odd", (): void => {
        const number = 11

        const actual = isOdd(number)

        expect(actual).toBeTruthy()
    })
})
