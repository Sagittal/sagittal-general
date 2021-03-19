import {Decimal, Pev, Multiplier} from "../../../../../src"
import {addPevs, subtractPevs, sumPevs} from "../../../../../src/math"
import {multiplyPev} from "../../../../../src/math/numeric/pev/typedOperations"

describe("sumPevs", (): void => {
    it("sums each of the terms of all of the pevs", (): void => {
        const pevA = [3, 2, 1, 0, -1, -5] as Pev
        const pevB = [0, -2, 4, 7, -3, 6, 1] as Pev
        const pevC = [1, 1, 0, 1, 1] as Pev

        const actual = sumPevs(pevA, pevB, pevC)

        const expected = [4, 1, 5, 8, -3, 1, 1] as Pev
        expect(actual).toEqual(expected)
    })

    it("trims the result when appropriate", (): void => {
        const pevA = [3, 2, 1, 0, -1, -5] as Pev
        const pevB = [0, -2, 4, 7, -3, 5] as Pev

        const actual = sumPevs(pevA, pevB)

        const expected = [3, 0, 5, 7, -4] as Pev
        expect(actual).toEqual(expected)
    })
})

describe("addPevs", (): void => {
    it("trims the result when appropriate", (): void => {
        const augendPev = [3, 2, 1, 0, -1, -5] as Pev
        const addendPev = [0, -2, 4, 7, -3, 5] as Pev

        const actual = addPevs(augendPev, addendPev)

        const expected = [3, 0, 5, 7, -4] as Pev
        expect(actual).toEqual(expected)
    })

    it("works when the augend pev is shorter than the addend pev", (): void => {
        const augendPev = [3, 2, 1] as Pev
        const addendPev = [0, 0, 0, 0, 1] as Pev

        const actual = addPevs(augendPev, addendPev)

        const expected = [3, 2, 1, 0, 1] as Pev
        expect(actual).toEqual(expected)
    })

    it("works when the augend pev is longer than the addend pev", (): void => {
        const augendPev = [0, 1, 1, 0, 1] as Pev
        const addendPev = [3, 1] as Pev

        const actual = addPevs(augendPev, addendPev)

        const expected = [3, 2, 1, 0, 1] as Pev
        expect(actual).toEqual(expected)
    })
})

describe("subtractPevs", (): void => {
    it("trims the result when appropriate", (): void => {
        const minuendPev = [3, 2, 1, 0, -1, -5] as Pev
        const subtrahendPev = [0, -2, 4, 7, -3, -5] as Pev

        const actual = subtractPevs(minuendPev, subtrahendPev)

        const expected = [3, 4, -3, -7, 2] as Pev
        expect(actual).toEqual(expected)
    })
})

describe("multiplyPev", (): void => {
    it("multiplies each prime exponent vector by the multiplier", (): void => {
        const pev = [0, 1, -3, 2] as Pev<{rational: true}>
        const multiplier = 5 as Decimal<{integer: true}> & Multiplier

        const actual = multiplyPev(pev, multiplier)

        const expected = [0, 5, -15, 10] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
