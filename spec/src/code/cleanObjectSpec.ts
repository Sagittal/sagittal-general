import {cleanObject} from "../../../src"

describe("cleanObject", (): void => {
    it("removes all properties from an object", (): void => {
        const object: Record<string, unknown> = {
            a: 2,
            b: 7,
        }

        cleanObject(object)

        expect(object).toEqual({} as Record<string, unknown>)
    })
})
