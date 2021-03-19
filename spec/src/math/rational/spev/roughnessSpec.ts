import {isRationalSpevRough, Spev} from "../../../../../src"
import {Roughness} from "../../../../../src/math"

describe("isRationalSpevRough", (): void => {
    it("returns true if the spev is n-rough (has no prime factors less than the prime min)", (): void => {
        const rationalSpev = {pev: [0, 0, 1]} as Spev<{rational: true}>

        const actual = isRationalSpevRough(rationalSpev, 5 as 5 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the spev has no prime factors less than the prime min", (): void => {
        const rationalSpev = {pev: [0, 0, 1]} as Spev<{rational: true}>

        const actual = isRationalSpevRough(rationalSpev, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})

