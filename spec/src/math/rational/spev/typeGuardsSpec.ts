import {isSpevRational, Pev, Quotient, Spev} from "../../../../../src"

describe("isSpevRational", (): void => {
    it("returns true if the scaler is absent", (): void => {
        const candidateRationalSpev = {pev: [5, 4]} as Spev<{rational: true}>

        const actual = isSpevRational(candidateRationalSpev)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaler is present", (): void => {
        const candidateRationalSpev = {
            pev: [5, 4] as Pev<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Spev<{rational: false}>

        const actual = isSpevRational(candidateRationalSpev)

        expect(actual).toBeFalsy()
    })
})
