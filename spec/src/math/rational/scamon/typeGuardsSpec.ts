import {isScamonRational, Monzo, Quotient, Scamon} from "../../../../../src"

describe("isScamonRational", (): void => {
    it("returns true if the scaler is absent", (): void => {
        const candidateRationalScamon = {monzo: [5, 4]} as Scamon<{rational: true}>

        const actual = isScamonRational(candidateRationalScamon)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaler is present", (): void => {
        const candidateRationalScamon = {
            monzo: [5, 4] as Monzo<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Scamon<{rational: false}>

        const actual = isScamonRational(candidateRationalScamon)

        expect(actual).toBeFalsy()
    })
})
