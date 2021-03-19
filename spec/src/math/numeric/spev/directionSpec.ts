import {
    computeSuperSpev,
    Direction,
    EMPTY_PEV,
    IRRATIONAL_SPEV_BASE_PEV,
    Pev,
    Quotient,
} from "../../../../../src"
import {isSpevSub, isSpevSuper, isSpevUnison, Spev} from "../../../../../src/math/numeric/spev"

describe("isSpevSub", (): void => {
    describe("for rational spevs", (): void => {
        it("returns true if the pev is sub", (): void => {
            const spev = {pev: [-1]} as Spev<{rational: true}>

            const actual = isSpevSub(spev)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pev is unison", (): void => {
            const spev = {pev: [] as unknown[]} as Spev<{rational: true}>

            const actual = isSpevSub(spev)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pev is super", (): void => {
            const spev = {pev: [1]} as Spev<{rational: true}>

            const actual = isSpevSub(spev)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational spevs", (): void => {
        it("returns true if the spev is sub", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [-1, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevSub(spev)

            expect(actual).toBeTruthy()
        })

        it("returns false if the spev is unison", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [0, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevSub(spev)

            expect(actual).toBeFalsy()
        })

        it("returns false if the spev is super", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [1, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevSub(spev)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isSpevSuper", (): void => {
    describe("for rational spevs", (): void => {
        it("returns false if the pev is sub", (): void => {
            const spev = {pev: [-1]} as Spev<{rational: true}>

            const actual = isSpevSuper(spev)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pev is unison", (): void => {
            const spev = {pev: [] as unknown[]} as Spev<{rational: true}>

            const actual = isSpevSuper(spev)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pev is super", (): void => {
            const spev = {pev: [1]} as Spev<{rational: true}>

            const actual = isSpevSuper(spev)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational spevs", (): void => {
        it("returns false if the spev is sub", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [-1, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevSuper(spev)

            expect(actual).toBeFalsy()
        })

        it("returns false if the spev is unison", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [0, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevSuper(spev)

            expect(actual).toBeFalsy()
        })

        it("returns true if the spev is super", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [1, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevSuper(spev)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isSpevUnison", (): void => {
    describe("for rational spevs", (): void => {
        it("returns false if the pev is sub", (): void => {
            const spev = {pev: [-1]} as Spev<{rational: true}>

            const actual = isSpevUnison(spev)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pev is unison", (): void => {
            const spev = {pev: [] as unknown[]} as Spev<{rational: true}>

            const actual = isSpevUnison(spev)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pev is super", (): void => {
            const spev = {pev: [1]} as Spev<{rational: true}>

            const actual = isSpevUnison(spev)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational spevs", (): void => {
        it("returns false if the spev is sub", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [-1, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevUnison(spev)

            expect(actual).toBeFalsy()
        })

        it("returns true if the spev is unison", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [0, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevUnison(spev)

            expect(actual).toBeTruthy()
        })

        it("returns false if the spev is super", (): void => {
            const spev = {
                pev: IRRATIONAL_SPEV_BASE_PEV,
                scaler: [1, 1] as Quotient,
            } as Spev<{rational: false}>

            const actual = isSpevUnison(spev)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperSpev", (): void => {
    it("if the spev is sub, flips the pev", (): void => {
        const spev = {
            pev: [-40, 22, 1, 1] as Pev<{rational: true, direction: Direction.SUB}>,
        } as Spev<{rational: true, direction: Direction.SUB}>

        const actual: Spev<{rational: true, direction: Direction.SUPER}> = computeSuperSpev(spev)

        const expected = {
            pev: [40, -22, -1, -1] as Pev<{rational: true, direction: Direction.SUPER}>,
        } as Spev<{rational: true, direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("if the spev is sub, flips the pev, even for an irrational spev, in which case it would be equivalent to negate the scaler - but we don't do that so we can preserve the relationship between the spev and its pev in terms of its numeric properties", (): void => {
        const spev = {
            pev: [-40, 22, 1, 1] as Pev<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Spev<{rational: false, direction: Direction.SUB}>

        const actual: Spev<{rational: false, direction: Direction.SUPER}> = computeSuperSpev(spev)

        const expected = {
            pev: [40, -22, -1, -1] as Pev<{rational: true, direction: Direction.SUPER}>,
            scaler: [1, 2] as Quotient,
        } as Spev<{rational: false, direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("returns unchanged a super spev", (): void => {
        const spev = {
            pev: [40, -22, -1, -1] as Pev<{rational: true, direction: Direction.SUPER}>,
        } as Spev<{rational: true, direction: Direction.SUPER}>

        const actual: Spev<{rational: true, direction: Direction.SUPER}> = computeSuperSpev(spev)

        expect(actual).toEqual(spev)
    })

    it("returns unchanged a unison spev", (): void => {
        const spev = {
            pev: EMPTY_PEV as Pev<{rational: true, direction: Direction.UNISON}>,
        } as Spev<{rational: true, direction: Direction.UNISON}>

        const actual: Spev<{rational: true, direction: Direction.UNISON}> = computeSuperSpev(spev)

        expect(actual).toEqual(spev)
    })
})
