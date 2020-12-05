import {isRationalScamonRough, Scamon} from "../../../../../src"
import {Roughness} from "../../../../../src/math"

describe("isRationalScamonRough", (): void => {
    it("returns true if the scamon is n-rough (has no prime factors less than the prime min)", (): void => {
        const rationalScamon = {monzo: [0, 0, 1]} as Scamon<{rational: true}>

        const actual = isRationalScamonRough(rationalScamon, 5 as 5 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scamon has no prime factors less than the prime min", (): void => {
        const rationalScamon = {monzo: [0, 0, 1]} as Scamon<{rational: true}>

        const actual = isRationalScamonRough(rationalScamon, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})

