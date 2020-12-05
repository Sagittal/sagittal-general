import {deepClone} from "../../../src"

describe("deepClone", (): void => {
    it("returns a clone of the object which when changed will not change the source object", (): void => {
        const object = [
            {a: 1},
        ]

        const actual = deepClone(object)
        actual[0].a = 2

        expect(object[0].a).toBe(1)
    })

    it("works even on undefined", (): void => {
        const object = undefined

        const actual = deepClone(object)

        expect(actual).toBeUndefined()
    })
})
