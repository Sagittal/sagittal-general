import {Decimal, Monzo, Multiplier} from "../../../../../src"
import {addMonzos, subtractMonzos, sumMonzos} from "../../../../../src/math"
import {multiplyMonzo} from "../../../../../src/math/numeric/monzo/typedOperations"

describe("sumMonzos", (): void => {
    it("sums each of the terms of all of the monzos", (): void => {
        const monzoA = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoB = [0, -2, 4, 7, -3, 6, 1] as Monzo
        const monzoC = [1, 1, 0, 1, 1] as Monzo

        const actual = sumMonzos(monzoA, monzoB, monzoC)

        const expected = [4, 1, 5, 8, -3, 1, 1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("trims the result when appropriate", (): void => {
        const monzoA = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoB = [0, -2, 4, 7, -3, 5] as Monzo

        const actual = sumMonzos(monzoA, monzoB)

        const expected = [3, 0, 5, 7, -4] as Monzo
        expect(actual).toEqual(expected)
    })
})

describe("addMonzos", (): void => {
    it("trims the result when appropriate", (): void => {
        const augendMonzo = [3, 2, 1, 0, -1, -5] as Monzo
        const addendMonzo = [0, -2, 4, 7, -3, 5] as Monzo

        const actual = addMonzos(augendMonzo, addendMonzo)

        const expected = [3, 0, 5, 7, -4] as Monzo
        expect(actual).toEqual(expected)
    })

    it("works when the augend monzo is shorter than the addend monzo", (): void => {
        const augendMonzo = [3, 2, 1] as Monzo
        const addendMonzo = [0, 0, 0, 0, 1] as Monzo

        const actual = addMonzos(augendMonzo, addendMonzo)

        const expected = [3, 2, 1, 0, 1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("works when the augend monzo is longer than the addend monzo", (): void => {
        const augendMonzo = [0, 1, 1, 0, 1] as Monzo
        const addendMonzo = [3, 1] as Monzo

        const actual = addMonzos(augendMonzo, addendMonzo)

        const expected = [3, 2, 1, 0, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})

describe("subtractMonzos", (): void => {
    it("trims the result when appropriate", (): void => {
        const minuendMonzo = [3, 2, 1, 0, -1, -5] as Monzo
        const subtrahendMonzo = [0, -2, 4, 7, -3, -5] as Monzo

        const actual = subtractMonzos(minuendMonzo, subtrahendMonzo)

        const expected = [3, 4, -3, -7, 2] as Monzo
        expect(actual).toEqual(expected)
    })
})

describe("multiplyMonzo", (): void => {
    it("multiplies each prime exponent vector by the multiplier", (): void => {
        const monzo = [0, 1, -3, 2] as Monzo<{rational: true}>
        const multiplier = 5 as Decimal<{integer: true}> & Multiplier

        const actual = multiplyMonzo(monzo, multiplier)

        const expected = [0, 5, -15, 10] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
