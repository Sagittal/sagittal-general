import { Io, removeColor } from "../../../src"

describe("removeColor", (): void => {
    it("removes color from text", (): void => {
        const text = "hello there".red as Io

        const actual = removeColor(text)

        const expected = "hello there" as Io
        expect(actual).toBe(expected)
    })

    it("removes underlines from text", (): void => {
        const text = "hello there".underline as Io

        const actual = removeColor(text)

        const expected = "hello there" as Io
        expect(actual).toBe(expected)
    })
})
