import { cleanObject } from "../../../src"
import { KeyValObj } from "../../../src/code/types"

describe("cleanObject", (): void => {
    it("removes all properties from an object", (): void => {
        const object: KeyValObj<number> = {
            a: 2,
            b: 7,
        }

        cleanObject(object)

        expect(object).toEqual({} as KeyValObj<number>)
    })
})
