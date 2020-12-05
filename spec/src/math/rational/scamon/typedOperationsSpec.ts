import {
    addRationalScamons,
    computeRationalScamonGeometricMean,
    Decimal,
    Mean,
    MeanType,
    Multiplier,
    multiplyScamon,
    Scamon,
    subtractRationalScamons,
    sumRationalScamons,
} from "../../../../../src"

describe("subtractRationalScamons", (): void => {
    it("works for two rational scamons, subtracting the from-scamon's monzo from the to-scamon's monzo", (): void => {
        const minuendScamon = {monzo: [-2, 0, 0, 1]} as Scamon<{rational: true}>
        const subtrahendScamon = {monzo: [-1, 1]} as Scamon<{rational: true}>

        const actual = subtractRationalScamons(minuendScamon, subtrahendScamon)

        const expected = {monzo: [-1, -1, 0, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("addRationalScamons", (): void => {
    it("works", (): void => {
        const augendRationalScamon = {monzo: [2, -1, -1, 1]} as Scamon<{rational: true}>
        const addendRationalScamon = {monzo: [-2, 1]} as Scamon<{rational: true}>

        const actual = addRationalScamons(augendRationalScamon, addendRationalScamon)

        const expected = {monzo: [0, 0, -1, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("computeRationalScamonGeometricMean", (): void => {
    it("sums the monzos and takes the nth-root where n is the count of scamons", (): void => {
        const scamonA = {monzo: [0, -5, 1]} as Scamon<{rational: true}>
        const scamonB = {monzo: [2, 0, 1]} as Scamon<{rational: true}>
        const scamonC = {monzo: [0, 4, 1]} as Scamon<{rational: true}>

        const actual = computeRationalScamonGeometricMean(scamonA, scamonB, scamonC)

        const expected = {
            monzo: [2, -1, 3],
            scaler: [1, 3],
        } as Mean<{of: Scamon<{rational: false}>, meanType: MeanType.GEOMETRIC}>
        expect(actual).toEqual(expected)
    })
})

describe("multiplyScamon", (): void => {
    it("multiplies each prime exponent vector by the multiplier", (): void => {
        const scamon = {monzo: [0, 1, -3, 2]} as Scamon<{rational: true}>
        const multiplier = 5 as Decimal<{integer: true}> & Multiplier

        const actual = multiplyScamon(scamon, multiplier)

        const expected = {monzo: [0, 5, -15, 10]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

describe("sumRationalScamons", (): void => {
    it("sums the corresponding terms in each scamon's monzo", (): void => {
        const scamonA = {monzo: [0, -5, 1]} as Scamon<{rational: true}>
        const scamonB = {monzo: [2, 0, 1]} as Scamon<{rational: true}>
        const scamonC = {monzo: [0, 4, 1]} as Scamon<{rational: true}>

        const actual = sumRationalScamons(scamonA, scamonB, scamonC)

        const expected = {monzo: [2, -1, 3]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
