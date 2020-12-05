import {addScamons, halveScamon, Max, Monzo, Quotient, scaleScamon, Scamon} from "../../../../../src"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../src/math/irrational/scamon/constants"
import {maxScamon, subtractScamons} from "../../../../../src/math/numeric/scamon/typedOperations"

describe("addScamons", (): void => {
    it("even if the scamons are both rational, this method returns a irrational scamon", (): void => {
        const augendScamon = {monzo: [2, -1, -1, 1]} as Scamon<{rational: true}>
        const addendScamon = {monzo: [-2, 1]} as Scamon<{rational: true}>

        const actual = addScamons(augendScamon, addendScamon)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.485427, 1],
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("subtractScamons", (): void => {
    it("works for two rational scamons, returning a irrational interval", (): void => {
        const minuendScamon = {monzo: [-2, 0, 0, 1]} as Scamon<{rational: true}>
        const subtrahendScamon = {monzo: [-1, 1]} as Scamon<{rational: true}>

        const actual = subtractScamons(minuendScamon, subtrahendScamon)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.222392, 1],
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the from scamon is irrational", (): void => {
        const minuendScamon = {monzo: [0, 0, 1]} as Scamon<{rational: true}>
        const subtrahendScamon = {
            monzo: [-2, 0, 0, 1] as Monzo<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Scamon<{rational: false}>

        const actual = subtractScamons(minuendScamon, subtrahendScamon)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [2.052810, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the to scamon is irrational", (): void => {
        const minuendScamon = {
            monzo: [0, 0, 1] as Monzo<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Scamon<{rational: false}>
        const subtrahendScamon = {monzo: [-2, 0, 0, 1]} as Scamon<{rational: true}>

        const actual = subtractScamons(minuendScamon, subtrahendScamon)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [-0.033379, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when both the from and to scamons are irrational", (): void => {
        const minuendScamon = {
            monzo: [0, 0, 1] as Monzo<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Scamon<{rational: false}>
        const subtrahendScamon = {
            monzo: [-2, 0, 0, 1] as Monzo<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Scamon<{rational: false}>

        const actual = subtractScamons(minuendScamon, subtrahendScamon)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.504858, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("halveScamon", (): void => {
    it("introduces a scaler (exponent) of 1/2 (root 2)", (): void => {
        const scamon = {monzo: [-11, 7]} as Scamon<{rational: true}>

        const actual = halveScamon(scamon)

        const expected = {
            monzo: [-11, 7] as Monzo<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toEqual(expected)
    })

    it("works if a scaler is already present", (): void => {
        const scamon = {
            monzo: [-11, 7] as Monzo<{rational: true}>,
            scaler: [5, 3] as Quotient,
        } as Scamon<{rational: false}>

        const actual = halveScamon(scamon)

        const expected = {
            monzo: [-11, 7] as Monzo<{rational: true}>,
            scaler: [5, 6] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toEqual(expected)
    })
})

describe("scaleScamon", (): void => {
    it("introduces a scaler", (): void => {
        const scamon = {monzo: [-11, 7]} as Scamon<{rational: true}>

        const actual = scaleScamon(scamon, [5, 3] as Quotient)

        const expected = {
            monzo: [-11, 7] as Monzo<{rational: true}>,
            scaler: [5, 3] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toEqual(expected)
    })

    it("takes the product of the provided scaler with an existing scaler", (): void => {
        const scamon = {
            monzo: [-11, 7] as Monzo<{rational: true}>,
            scaler: [5, 3],
        } as Scamon<{rational: false}>

        const actual = scaleScamon(scamon, [1, 2] as Quotient)

        const expected = {
            monzo: [-11, 7] as Monzo<{rational: true}>,
            scaler: [5, 6] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toEqual(expected)
    })
})


describe("maxScamon", (): void => {
    it("works for a mix of rational and irrational scamons", (): void => {
        const scamonA = {monzo: [-2, -1, 0, 0, 1]} as Scamon<{rational: true}>   // 11/12
        const scamonB = {
            monzo: [1] as Monzo<{rational: true}>,
            scaler: [3, 1] as Quotient,
        } as Scamon<{rational: false}>                                           // 8
        const scamonC = {monzo: [0, 1]} as Scamon<{rational: true}>              // 7

        const actual = maxScamon(scamonA, scamonB, scamonC)

        expect(actual).toEqual(scamonB as Scamon as Max<Scamon>)
    })
})
