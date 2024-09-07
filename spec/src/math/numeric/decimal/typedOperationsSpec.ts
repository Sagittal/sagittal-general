import { mod } from "../../../../../src"

describe("mod", (): void => {
    it("works", (): void => {
        expect(mod(57, 19)).toEqual(0)
        expect(mod(57, 10)).toEqual(7)
        expect(mod(-2, 10)).toEqual(8)
    })
})
