import {
    computeSuperScamon,
    Direction,
    EMPTY_MONZO,
    IRRATIONAL_SCAMON_BASE_MONZO,
    Monzo,
    Quotient,
} from "../../../../../src"
import {isScamonSub, isScamonSuper, isScamonUnison, Scamon} from "../../../../../src/math/numeric/scamon"

describe("isScamonSub", (): void => {
    describe("for rational scamons", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const scamon = {monzo: [-1]} as Scamon<{rational: true}>

            const actual = isScamonSub(scamon)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const scamon = {monzo: [] as unknown[]} as Scamon<{rational: true}>

            const actual = isScamonSub(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const scamon = {monzo: [1]} as Scamon<{rational: true}>

            const actual = isScamonSub(scamon)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational scamons", (): void => {
        it("returns true if the scamon is sub", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [-1, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonSub(scamon)

            expect(actual).toBeTruthy()
        })

        it("returns false if the scamon is unison", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [0, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonSub(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scamon is super", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [1, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonSub(scamon)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isScamonSuper", (): void => {
    describe("for rational scamons", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const scamon = {monzo: [-1]} as Scamon<{rational: true}>

            const actual = isScamonSuper(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const scamon = {monzo: [] as unknown[]} as Scamon<{rational: true}>

            const actual = isScamonSuper(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const scamon = {monzo: [1]} as Scamon<{rational: true}>

            const actual = isScamonSuper(scamon)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational scamons", (): void => {
        it("returns false if the scamon is sub", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [-1, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonSuper(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scamon is unison", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [0, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonSuper(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns true if the scamon is super", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [1, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonSuper(scamon)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isScamonUnison", (): void => {
    describe("for rational scamons", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const scamon = {monzo: [-1]} as Scamon<{rational: true}>

            const actual = isScamonUnison(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const scamon = {monzo: [] as unknown[]} as Scamon<{rational: true}>

            const actual = isScamonUnison(scamon)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const scamon = {monzo: [1]} as Scamon<{rational: true}>

            const actual = isScamonUnison(scamon)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational scamons", (): void => {
        it("returns false if the scamon is sub", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [-1, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonUnison(scamon)

            expect(actual).toBeFalsy()
        })

        it("returns true if the scamon is unison", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [0, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonUnison(scamon)

            expect(actual).toBeTruthy()
        })

        it("returns false if the scamon is super", (): void => {
            const scamon = {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [1, 1] as Quotient,
            } as Scamon<{rational: false}>

            const actual = isScamonUnison(scamon)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperScamon", (): void => {
    it("if the scamon is sub, flips the monzo", (): void => {
        const scamon = {
            monzo: [-40, 22, 1, 1] as Monzo<{rational: true, direction: Direction.SUB}>,
        } as Scamon<{rational: true, direction: Direction.SUB}>

        const actual: Scamon<{rational: true, direction: Direction.SUPER}> = computeSuperScamon(scamon)

        const expected = {
            monzo: [40, -22, -1, -1] as Monzo<{rational: true, direction: Direction.SUPER}>,
        } as Scamon<{rational: true, direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("if the scamon is sub, flips the monzo, even for a irrational scamon, in which case it would be equivalent to negate the scaler - but we don't do that so we can preserve the relationship between the scamon and its monzo in terms of its numeric properties", (): void => {
        const scamon = {
            monzo: [-40, 22, 1, 1] as Monzo<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Scamon<{rational: false, direction: Direction.SUB}>

        const actual: Scamon<{rational: false, direction: Direction.SUPER}> = computeSuperScamon(scamon)

        const expected = {
            monzo: [40, -22, -1, -1] as Monzo<{rational: true, direction: Direction.SUPER}>,
            scaler: [1, 2] as Quotient,
        } as Scamon<{rational: false, direction: Direction.SUPER}>
        expect(actual).toEqual(expected)
    })

    it("returns unchanged a super scamon", (): void => {
        const scamon = {
            monzo: [40, -22, -1, -1] as Monzo<{rational: true, direction: Direction.SUPER}>,
        } as Scamon<{rational: true, direction: Direction.SUPER}>

        const actual: Scamon<{rational: true, direction: Direction.SUPER}> = computeSuperScamon(scamon)

        expect(actual).toEqual(scamon)
    })

    it("returns unchanged a unison scamon", (): void => {
        const scamon = {
            monzo: EMPTY_MONZO as Monzo<{rational: true, direction: Direction.UNISON}>,
        } as Scamon<{rational: true, direction: Direction.UNISON}>

        const actual: Scamon<{rational: true, direction: Direction.UNISON}> = computeSuperScamon(scamon)

        expect(actual).toEqual(scamon)
    })
})
