import {
    areSpevsEqual,
    isSpevGreater,
    isSpevGreaterOrEqual,
    isSpevLesser,
    isSpevLesserOrEqual,
    Pev,
    Quotient,
    Spev,
} from "../../../../../src"

describe("areSpevsEqual", (): void => {
    describe("for rational spevs", (): void => {
        it("returns true if the pevs match", (): void => {
            const spevA = {pev: [0, 0, 1, -1]} as Spev<{rational: true}>
            const spevB = {pev: [0, 0, 1, -1]} as Spev<{rational: true}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pevs do not match", (): void => {
            const spevA = {pev: [0, 0, 1, -1]} as Spev<{rational: true}>
            const spevB = {pev: [0, 0, -1, -1]} as Spev<{rational: true}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeFalsy()
        })

        it("works when pevs haven't been trimmed", (): void => {
            const spevA = {pev: [0, 0]} as Spev<{rational: true}>
            const spevB = {pev: [0]} as Spev<{rational: true}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational spevs", (): void => {
        it("returns true if both the pevs and scalers match", (): void => {
            const spevA = {
                pev: [0, 0, 1, -1] as Pev<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Spev<{rational: false}>
            const spevB = {
                pev: [0, 0, 1, -1] as Pev<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Spev<{rational: false}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pevs do not match", (): void => {
            const spevA = {
                pev: [0, 0, 1, -1] as Pev<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Spev<{rational: false}>
            const spevB = {
                pev: [0, 0, -1, -1] as Pev<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Spev<{rational: false}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scalers do not match", (): void => {
            const spevA = {
                pev: [0, 0, 1, -1] as Pev<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Spev<{rational: false}>
            const spevB = {
                pev: [0, 0, 1, -1] as Pev<{rational: true}>,
                scaler: [1, 2] as Quotient,
            } as Spev<{rational: false}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeFalsy()
        })
    })

    describe("for a combination of a rational spev and an irrational spev", (): void => {
        it("returns true if they are equivalent", (): void => {
            const spevA = {
                pev: [0, 0, 1, -1] as Pev<{rational: true}>,
            } as Spev<{rational: true}>
            const spevB = {
                pev: [0, 0, 2, -2] as Pev<{rational: true}>,
                scaler: [1, 2] as Quotient,
            } as Spev<{rational: false}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeTruthy()
        })

        it("returns false if they are not equivalent", (): void => {
            const spevA = {
                pev: [0, 0, 2, -2] as Pev<{rational: true}>,
            } as Spev<{rational: true}>
            const spevB = {
                pev: [0, 0, 2, -2] as Pev<{rational: true}>,
                scaler: [1, 2] as Quotient,
            } as Spev<{rational: false}>

            const actual = areSpevsEqual(spevA, spevB)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isSpevGreater", (): void => {
    it("returns true if the spev is higher than the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-3, 2]} as Spev<{rational: true}>

        const actual = isSpevGreater(spev, otherSpev)

        expect(actual).toBeTruthy()
    })

    it("returns false if the spev is equal to the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevGreater(spev, otherSpev)

        expect(actual).toBeFalsy()
    })

    it("returns false if the spev is lower than the other", (): void => {
        const spev = {pev: [-3, 2]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevGreater(spev, otherSpev)

        expect(actual).toBeFalsy()
    })

    it("example of a rational spev and an irrational spev which are quite close", (): void => {
        const spev = {pev: [-7, -1, 1, 1, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [317, -200], scaler: [1, 2]} as Spev<{rational: false}>

        const actual = isSpevGreater(spev, otherSpev)

        expect(actual).toBeTruthy()
    })
})

describe("isSpevLesser", (): void => {
    it("returns false if the spev is higher than the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-3, 2]} as Spev<{rational: true}>

        const actual = isSpevLesser(spev, otherSpev)

        expect(actual).toBeFalsy()
    })

    it("returns false if the spev is equal to the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevLesser(spev, otherSpev)

        expect(actual).toBeFalsy()
    })

    it("returns true if the spev is lower than the other", (): void => {
        const spev = {pev: [-3, 2]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevLesser(spev, otherSpev)

        expect(actual).toBeTruthy()
    })
})

describe("isSpevGreaterOrEqual", (): void => {
    it("returns true if the spev is higher than the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-3, 2]} as Spev<{rational: true}>

        const actual = isSpevGreaterOrEqual(spev, otherSpev)

        expect(actual).toBeTruthy()
    })

    it("returns true if the spev is equal to the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevGreaterOrEqual(spev, otherSpev)

        expect(actual).toBeTruthy()
    })

    it("returns false if the spev is lower than the other", (): void => {
        const spev = {pev: [-3, 2]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevGreaterOrEqual(spev, otherSpev)

        expect(actual).toBeFalsy()
    })
})

describe("isSpevLesserOrEqual", (): void => {
    it("returns false if the spev is higher than the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-3, 2]} as Spev<{rational: true}>

        const actual = isSpevLesserOrEqual(spev, otherSpev)

        expect(actual).toBeFalsy()
    })

    it("returns true if the spev is equal to the other", (): void => {
        const spev = {pev: [-2, 0, 1]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevLesserOrEqual(spev, otherSpev)

        expect(actual).toBeTruthy()
    })

    it("returns true if the spev is lower than the other", (): void => {
        const spev = {pev: [-3, 2]} as Spev<{rational: true}>
        const otherSpev = {pev: [-2, 0, 1]} as Spev<{rational: true}>

        const actual = isSpevLesserOrEqual(spev, otherSpev)

        expect(actual).toBeTruthy()
    })
})

