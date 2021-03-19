import {
    addRationalSpevs,
    computeRationalSpevGeometricMean,
    Decimal,
    Mean,
    MeanType,
    Multiplier,
    multiplySpev,
    Spev,
    subtractRationalSpevs,
    sumRationalSpevs,
} from "../../../../../src"

describe("subtractRationalSpevs", (): void => {
    it("works for two rational spevs, subtracting the from-spev's pev from the to-spev's pev", (): void => {
        const minuendSpev = {pev: [-2, 0, 0, 1]} as Spev<{rational: true}>
        const subtrahendSpev = {pev: [-1, 1]} as Spev<{rational: true}>

        const actual = subtractRationalSpevs(minuendSpev, subtrahendSpev)

        const expected = {pev: [-1, -1, 0, 1]} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("addRationalSpevs", (): void => {
    it("works", (): void => {
        const augendRationalSpev = {pev: [2, -1, -1, 1]} as Spev<{rational: true}>
        const addendRationalSpev = {pev: [-2, 1]} as Spev<{rational: true}>

        const actual = addRationalSpevs(augendRationalSpev, addendRationalSpev)

        const expected = {pev: [0, 0, -1, 1]} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("computeRationalSpevGeometricMean", (): void => {
    it("sums the pevs and takes the nth-root where n is the count of spevs", (): void => {
        const spevA = {pev: [0, -5, 1]} as Spev<{rational: true}>
        const spevB = {pev: [2, 0, 1]} as Spev<{rational: true}>
        const spevC = {pev: [0, 4, 1]} as Spev<{rational: true}>

        const actual = computeRationalSpevGeometricMean(spevA, spevB, spevC)

        const expected = {
            pev: [2, -1, 3],
            scaler: [1, 3],
        } as Mean<{of: Spev<{rational: false}>, meanType: MeanType.GEOMETRIC}>
        expect(actual).toEqual(expected)
    })
})

describe("multiplySpev", (): void => {
    it("multiplies each prime exponent vector by the multiplier", (): void => {
        const spev = {pev: [0, 1, -3, 2]} as Spev<{rational: true}>
        const multiplier = 5 as Decimal<{integer: true}> & Multiplier

        const actual = multiplySpev(spev, multiplier)

        const expected = {pev: [0, 5, -15, 10]} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("sumRationalSpevs", (): void => {
    it("sums the corresponding terms in each spev's pev", (): void => {
        const spevA = {pev: [0, -5, 1]} as Spev<{rational: true}>
        const spevB = {pev: [2, 0, 1]} as Spev<{rational: true}>
        const spevC = {pev: [0, 4, 1]} as Spev<{rational: true}>

        const actual = sumRationalSpevs(spevA, spevB, spevC)

        const expected = {pev: [2, -1, 3]} as Spev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
