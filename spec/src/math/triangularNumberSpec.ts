import { computeTriangularNumber } from "../../../src"

describe("triangular number", (): void => {
    it("returns the nth triangular number", (): void => {
        expect(computeTriangularNumber(1)).toBe(1)
        expect(computeTriangularNumber(2)).toBe(3)
        expect(computeTriangularNumber(3)).toBe(6)
        expect(computeTriangularNumber(4)).toBe(10)
    })
})
