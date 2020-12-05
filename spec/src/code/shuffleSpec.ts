import {deepClone, shuffle} from "../../../src"

describe("shuffle", (): void => {
    it("randomly changes the order of the elements in the array", (): void => {
        const array = [...Array(50).keys()]
        const originalArray = deepClone(array)

        shuffle(array)

        expect(array).not.toEqual(originalArray)
        expect(array.length).toBe(originalArray.length)
        originalArray.forEach((originalElement: number): void => {
            expect(array).toContain(originalElement)
        })
    })
})
