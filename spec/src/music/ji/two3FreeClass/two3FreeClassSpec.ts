import {compute23FreeClass, Spev, Two3FreeClass} from "../../../../../src"

describe("compute23FreeClass", (): void => {
    it("returns the 2,3-free, THEN super taken (n ≥ d) version of the pitch, branded", (): void => {
        const jiPitch = {pev: [4, 1, -2]} as Spev<{rational: true}>     // 48/25

        const actual = compute23FreeClass(jiPitch)

        const expected = {pev: [0, 0, 2]} as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the pev if necessary", (): void => {
        const jiPitch = {pev: [4, 1]} as Spev<{rational: true}>         // 48/1

        const actual = compute23FreeClass(jiPitch)

        const expected = {pev: [] as unknown[]} as Two3FreeClass
        expect(actual).toEqual(expected)
    })
})
