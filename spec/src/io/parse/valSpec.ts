import {Io, Val} from "../../../../src"
import {parseVal} from "../../../../src/io/parse/val"

describe("parseVal", (): void => {
    const expected = [3, 4, -5] as Val

    it("parses vals", (): void => {
        const valIo = "[3,4,-5]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted vals", (): void => {
        const valIo = "⟨ 3 4 -5 ]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("parses vals given with less than signs", (): void => {
        const valIo = "< 3 4 -5 ]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("parses vals given with pipes", (): void => {
        const valIo = "⟨ 3 4 -5 |" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("parses vals given with no spaces on the ends", (): void => {
        const valIo = "⟨3 4 -5]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("parses vals as they are returned by scripts, with the extra spaces to align them", (): void => {
        const valIo = "⟨   3   4  -5 ]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const valIo = "[3, 4, -5]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const valIo = "[3\t4\t-5]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational vals", (): void => {
        const valIo = "[-9.5\t6]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual([-9.5, 6] as Val)
    })

    it("can handle George Secor's punctuated format", (): void => {
        const valIo = "⟨3 4, 0 1 2, 6]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual([3, 4, 0, 1, 2, 6] as Val)
    })

    it("can handle abbreviated format", (): void => {
        const valIo = "⟨-8 -6 3 5 -1 0 0 0 5 4 2 3]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Val)
    })

    it("can handle abbreviated and punctuated format", (): void => {
        const valIo = "⟨-8 -6,3 5 -1,,5 4 2,,,3]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Val)
    })

    it("can handle 2,3-free vals in abbreviated and punctuated format", (): void => {
        const valIo = "⟨,5 7]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual([0, 0, 5, 7] as Val)
    })

    it("can handle 2-free vals in abbreviated and punctuated format, when the presence of angle brackets or the like make it clear that it is not supposed to be a non 2-free val such as one copied as a JavaScript array", (): void => {
        const valIo = "⟨3,5]" as Io

        const actual = parseVal(valIo)

        expect(actual).toEqual([0, 3, 5] as Val)
    })
})
