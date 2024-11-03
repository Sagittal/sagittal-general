import { allElementsEqual } from "../../../src/code"

describe("all elements equal", (): void => {
    it("should return whether or not every element in the array is the same", (): void => {
        expect(allElementsEqual([4, 4, 4])).toBeTruthy()

        expect(allElementsEqual([{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }])).toBeTruthy()

        expect(allElementsEqual(["bean", "bean"])).toBeTruthy()

        expect(allElementsEqual([1, 1, 1, 2, 1, 1])).toBeFalsy()
    })
})
