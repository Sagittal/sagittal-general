import {arePevsEqual, Pev} from "../../../../../src"

describe("arePevsEqual", (): void => {
    it("returns true if the pevs are equal", (): void => {
        const pevA: Pev = [5, 4] as Pev
        const pevB: Pev = [5, 4] as Pev

        const actual = arePevsEqual(pevA, pevB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pevs are not equal", (): void => {
        const pevA: Pev = [5, 4] as Pev
        const pevB: Pev = [5, 0, 4] as Pev

        const actual = arePevsEqual(pevA, pevB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pevs are equal, trimming them if necessary", (): void => {
        const pevA: Pev = [5, 4, 0] as Pev
        const pevB: Pev = [5, 4] as Pev

        const actual = arePevsEqual(pevA, pevB)

        expect(actual).toBeTruthy()
    })
})
