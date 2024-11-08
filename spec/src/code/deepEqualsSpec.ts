import { deepEquals, DEFAULT_PRECISION } from "../../../src"

describe("deepEquals", (): void => {
    it("returns true if two arrays are equal", (): void => {
        expect(deepEquals([3, 4, 5], [3, 4, 5])).toBeTruthy()
    })

    it("returns false if two array are not equal", (): void => {
        expect(deepEquals([3, 5, 4], [3, 4, 5])).toBeFalsy()
    })

    it("returns true if two objects are equal", (): void => {
        expect(deepEquals({ a: 3, b: 7 }, { a: 3, b: 7 })).toBeTruthy()
    })

    it("returns false if two objects are not equal", (): void => {
        expect(deepEquals({ a: 3, b: 6 }, { a: 3, b: 7 })).toBeFalsy()
    })

    it("returns true if two objects are equal, irrespective of their keys' order", (): void => {
        expect(deepEquals({ b: 7, a: 3 }, { a: 3, b: 7 })).toBeTruthy()
    })

    it("returns true if two objects are equal, irrespective of their keys' order, even if they are deep", (): void => {
        expect(deepEquals([{ b: 7, a: 3 }], [{ a: 3, b: 7 }])).toBeTruthy()
    })

    it("returns false in this situation which for whatever reason it returned true in until I fixed it", (): void => {
        expect(deepEquals([{}], [{ a: "b" }])).toBeFalsy()
    })

    it("returns false in this other situation which for whatever reason it returned true in until I fixed it -- probably I should check my test coverage on the project I yanked this implementation of deep equals from!", (): void => {
        expect(deepEquals([1], [1, 2])).toBeFalsy()
    })

    it("can take a precision argument which allows for numbers inside the object to be approximate", (): void => {
        expect(deepEquals({ a: 3.0000001 }, { a: 3 })).toBeFalsy()
        expect(deepEquals({ a: 3.0000001 }, { a: 3 }, DEFAULT_PRECISION)).toBeTruthy()
    })

    it("can take a precision argument which allows for numbers inside the array of objects to be approximate", (): void => {
        expect(deepEquals([{ a: 3.000001 }, { b: 4 }], [{ a: 3 }, { b: 3.999999 }])).toBeFalsy()
        expect(
            deepEquals([{ a: 3.000001 }, { b: 4 }], [{ a: 3 }, { b: 3.999999 }], DEFAULT_PRECISION),
        ).toBeTruthy()
    })
})
