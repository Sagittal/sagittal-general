import { compute23FreeClass, ScaledVector, Two3FreeClass } from "../../../../../src"

describe("compute23FreeClass", (): void => {
    it("returns the 2,3-free, THEN super taken (n ≥ d) version of the pitch, branded", (): void => {
        const jiPitch = { vector: [4, 1, -2] } as ScaledVector // 48/25

        const actual = compute23FreeClass(jiPitch)

        const expected = { vector: [0, 0, 2] } as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the vector if necessary", (): void => {
        const jiPitch = { vector: [4, 1] } as ScaledVector // 48/1

        const actual = compute23FreeClass(jiPitch)

        const expected = { vector: [] as unknown[] } as Two3FreeClass
        expect(actual).toEqual(expected)
    })
})
