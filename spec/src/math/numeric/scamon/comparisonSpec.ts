import {
    areScamonsEqual,
    isScamonGreater,
    isScamonGreaterOrEqual,
    isScamonLesser,
    isScamonLesserOrEqual,
    Monzo,
    Quotient,
    Scamon,
} from "../../../../../src"

describe("areScamonsEqual", (): void => {
    describe("for rational scamons", (): void => {
        it("returns true if the monzos match", (): void => {
            const scamonA = {monzo: [0, 0, 1, -1]} as Scamon<{rational: true}>
            const scamonB = {monzo: [0, 0, 1, -1]} as Scamon<{rational: true}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzos do not match", (): void => {
            const scamonA = {monzo: [0, 0, 1, -1]} as Scamon<{rational: true}>
            const scamonB = {monzo: [0, 0, -1, -1]} as Scamon<{rational: true}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeFalsy()
        })

        it("works when monzos haven't been trimmed", (): void => {
            const scamonA = {monzo: [0, 0]} as Scamon<{rational: true}>
            const scamonB = {monzo: [0]} as Scamon<{rational: true}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational scamons", (): void => {
        it("returns true if both the monzos and scalers match", (): void => {
            const scamonA = {
                monzo: [0, 0, 1, -1] as Monzo<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Scamon<{rational: false}>
            const scamonB = {
                monzo: [0, 0, 1, -1] as Monzo<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Scamon<{rational: false}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzos do not match", (): void => {
            const scamonA = {
                monzo: [0, 0, 1, -1] as Monzo<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Scamon<{rational: false}>
            const scamonB = {
                monzo: [0, 0, -1, -1] as Monzo<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Scamon<{rational: false}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scalers do not match", (): void => {
            const scamonA = {
                monzo: [0, 0, 1, -1] as Monzo<{rational: true}>,
                scaler: [1, 12] as Quotient,
            } as Scamon<{rational: false}>
            const scamonB = {
                monzo: [0, 0, 1, -1] as Monzo<{rational: true}>,
                scaler: [1, 2] as Quotient,
            } as Scamon<{rational: false}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeFalsy()
        })
    })

    describe("for a combination of a rational scamon and an irrational scamon", (): void => {
        it("returns true if they are equivalent", (): void => {
            const scamonA = {
                monzo: [0, 0, 1, -1] as Monzo<{rational: true}>,
            } as Scamon<{rational: true}>
            const scamonB = {
                monzo: [0, 0, 2, -2] as Monzo<{rational: true}>,
                scaler: [1, 2] as Quotient,
            } as Scamon<{rational: false}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeTruthy()
        })

        it("returns false if they are not equivalent", (): void => {
            const scamonA = {
                monzo: [0, 0, 2, -2] as Monzo<{rational: true}>,
            } as Scamon<{rational: true}>
            const scamonB = {
                monzo: [0, 0, 2, -2] as Monzo<{rational: true}>,
                scaler: [1, 2] as Quotient,
            } as Scamon<{rational: false}>

            const actual = areScamonsEqual(scamonA, scamonB)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isScamonGreater", (): void => {
    it("returns true if the scamon is higher than the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-3, 2]} as Scamon<{rational: true}>

        const actual = isScamonGreater(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scamon is equal to the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonGreater(scamon, otherScamon)

        expect(actual).toBeFalsy()
    })

    it("returns false if the scamon is lower than the other", (): void => {
        const scamon = {monzo: [-3, 2]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonGreater(scamon, otherScamon)

        expect(actual).toBeFalsy()
    })

    it("example of a rational scamon and an irrational scamon which are quite close", (): void => {
        const scamon = {monzo: [-7, -1, 1, 1, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [317, -200], scaler: [1, 2]} as Scamon<{rational: false}>

        const actual = isScamonGreater(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })
})

describe("isScamonLesser", (): void => {
    it("returns false if the scamon is higher than the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-3, 2]} as Scamon<{rational: true}>

        const actual = isScamonLesser(scamon, otherScamon)

        expect(actual).toBeFalsy()
    })

    it("returns false if the scamon is equal to the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonLesser(scamon, otherScamon)

        expect(actual).toBeFalsy()
    })

    it("returns true if the scamon is lower than the other", (): void => {
        const scamon = {monzo: [-3, 2]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonLesser(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })
})

describe("isScamonGreaterOrEqual", (): void => {
    it("returns true if the scamon is higher than the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-3, 2]} as Scamon<{rational: true}>

        const actual = isScamonGreaterOrEqual(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })

    it("returns true if the scamon is equal to the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonGreaterOrEqual(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scamon is lower than the other", (): void => {
        const scamon = {monzo: [-3, 2]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonGreaterOrEqual(scamon, otherScamon)

        expect(actual).toBeFalsy()
    })
})

describe("isScamonLesserOrEqual", (): void => {
    it("returns false if the scamon is higher than the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-3, 2]} as Scamon<{rational: true}>

        const actual = isScamonLesserOrEqual(scamon, otherScamon)

        expect(actual).toBeFalsy()
    })

    it("returns true if the scamon is equal to the other", (): void => {
        const scamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonLesserOrEqual(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })

    it("returns true if the scamon is lower than the other", (): void => {
        const scamon = {monzo: [-3, 2]} as Scamon<{rational: true}>
        const otherScamon = {monzo: [-2, 0, 1]} as Scamon<{rational: true}>

        const actual = isScamonLesserOrEqual(scamon, otherScamon)

        expect(actual).toBeTruthy()
    })
})

