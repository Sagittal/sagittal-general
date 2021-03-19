import {
    addSpevs,
    halveSpev,
    IRRATIONAL_SPEV_BASE_PEV,
    Max,
    Pev,
    Quotient,
    scaleSpev,
    Spev,
} from "../../../../../src"
import {maxSpev, subtractSpevs} from "../../../../../src/math/numeric/spev/typedOperations"

describe("addSpevs", (): void => {
    it("even if the spevs are both rational, this method returns an irrational spev", (): void => {
        const augendSpev = {pev: [2, -1, -1, 1]} as Spev<{rational: true}>
        const addendSpev = {pev: [-2, 1]} as Spev<{rational: true}>

        const actual = addSpevs(augendSpev, addendSpev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.485427, 1],
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("subtractSpevs", (): void => {
    it("works for two rational spevs, returning an irrational interval", (): void => {
        const minuendSpev = {pev: [-2, 0, 0, 1]} as Spev<{rational: true}>
        const subtrahendSpev = {pev: [-1, 1]} as Spev<{rational: true}>

        const actual = subtractSpevs(minuendSpev, subtrahendSpev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.222392, 1],
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the from spev is irrational", (): void => {
        const minuendSpev = {pev: [0, 0, 1]} as Spev<{rational: true}>
        const subtrahendSpev = {
            pev: [-2, 0, 0, 1] as Pev<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Spev<{rational: false}>

        const actual = subtractSpevs(minuendSpev, subtrahendSpev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [2.052810, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the to spev is irrational", (): void => {
        const minuendSpev = {
            pev: [0, 0, 1] as Pev<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Spev<{rational: false}>
        const subtrahendSpev = {pev: [-2, 0, 0, 1]} as Spev<{rational: true}>

        const actual = subtractSpevs(minuendSpev, subtrahendSpev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [-0.033379, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when both the from and to spevs are irrational", (): void => {
        const minuendSpev = {
            pev: [0, 0, 1] as Pev<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Spev<{rational: false}>
        const subtrahendSpev = {
            pev: [-2, 0, 0, 1] as Pev<{rational: true}>,
            scaler: [1, 3] as Quotient,
        } as Spev<{rational: false}>

        const actual = subtractSpevs(minuendSpev, subtrahendSpev)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.504858, 1] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("halveSpev", (): void => {
    it("introduces a scaler (exponent) of 1/2 (root 2)", (): void => {
        const spev = {pev: [-11, 7]} as Spev<{rational: true}>

        const actual = halveSpev(spev)

        const expected = {
            pev: [-11, 7] as Pev<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toEqual(expected)
    })

    it("works if a scaler is already present", (): void => {
        const spev = {
            pev: [-11, 7] as Pev<{rational: true}>,
            scaler: [5, 3] as Quotient,
        } as Spev<{rational: false}>

        const actual = halveSpev(spev)

        const expected = {
            pev: [-11, 7] as Pev<{rational: true}>,
            scaler: [5, 6] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toEqual(expected)
    })
})

describe("scaleSpev", (): void => {
    it("introduces a scaler", (): void => {
        const spev = {pev: [-11, 7]} as Spev<{rational: true}>

        const actual = scaleSpev(spev, [5, 3] as Quotient)

        const expected = {
            pev: [-11, 7] as Pev<{rational: true}>,
            scaler: [5, 3] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toEqual(expected)
    })

    it("takes the product of the provided scaler with an existing scaler", (): void => {
        const spev = {
            pev: [-11, 7] as Pev<{rational: true}>,
            scaler: [5, 3],
        } as Spev<{rational: false}>

        const actual = scaleSpev(spev, [1, 2] as Quotient)

        const expected = {
            pev: [-11, 7] as Pev<{rational: true}>,
            scaler: [5, 6] as Quotient,
        } as Spev<{rational: false}>
        expect(actual).toEqual(expected)
    })
})


describe("maxSpev", (): void => {
    it("works for a mix of rational and irrational spevs", (): void => {
        const spevA = {pev: [-2, -1, 0, 0, 1]} as Spev<{rational: true}>   // 11/12
        const spevB = {
            pev: [1] as Pev<{rational: true}>,
            scaler: [3, 1] as Quotient,
        } as Spev<{rational: false}>                                           // 8
        const spevC = {pev: [0, 1]} as Spev<{rational: true}>              // 7

        const actual = maxSpev(spevA, spevB, spevC)

        expect(actual).toEqual(spevB as Spev as Max<Spev>)
    })
})
