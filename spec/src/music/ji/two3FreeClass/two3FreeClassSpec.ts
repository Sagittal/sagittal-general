import {compute23FreeClass, Scamon, Two3FreeClass} from "../../../../../src"

describe("compute23FreeClass", (): void => {
    it("returns the 2,3-free, THEN super taken (n ≥ d) version of the pitch, branded", (): void => {
        const jiPitch = {monzo: [4, 1, -2]} as Scamon<{rational: true}>     // 48/25

        const actual = compute23FreeClass(jiPitch)

        const expected = {monzo: [0, 0, 2]} as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", (): void => {
        const jiPitch = {monzo: [4, 1]} as Scamon<{rational: true}>         // 48/1

        const actual = compute23FreeClass(jiPitch)

        const expected = {monzo: [] as unknown[]} as Two3FreeClass
        expect(actual).toEqual(expected)
    })
})
