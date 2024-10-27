import {Io, Vector, parseVector} from "../../../../src"

describe("parseVector", (): void => {
    const expected = [3, 4, -5] as Vector

    it("parses vectors", (): void => {
        const vectorIo = "[3,4,-5]" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted vectors", (): void => {
        const vectorIo = "[ 3 4 -5 ⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("parses vectors given with greater than signs", (): void => {
        const vectorIo = "[ 3 4 -5 >" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("parses vectors given with pipes", (): void => {
        const vectorIo = "| 3 4 -5 ⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("parses vectors given with no spaces on the ends", (): void => {
        const vectorIo = "[3 4 -5⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("parses vectors as they are returned by scripts, with the extra spaces to align them", (): void => {
        const vectorIo = "[   3   4  -5 ⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const vectorIo = "[3, 4, -5]" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const vectorIo = "[3\t4\t-5]" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational vectors", (): void => {
        const vectorIo = "[-9.5\t6]" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual([-9.5, 6] as Vector)
    })

    it("can handle George Secor's punctuated format", (): void => {
        const vectorIo = "[3 4, 0 1 2, 6⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual([3, 4, 0, 1, 2, 6] as Vector)
    })

    it("can handle abbreviated format", (): void => {
        const vectorIo = "[-8 -6 3 5 -1 0 0 0 5 4 2 3⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Vector)
    })

    it("can handle abbreviated and punctuated format", (): void => {
        const vectorIo = "[-8 -6,3 5 -1,,5 4 2,,,3⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Vector)
    })

    it("can handle 2,3-free vectors in abbreviated and punctuated format", (): void => {
        const vectorIo = "[,5 7⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual([0, 0, 5, 7] as Vector)
    })

    it("can handle 2-free vectors in abbreviated and punctuated format, when the presence of angle brackets or the like make it clear that it is not supposed to be a non 2-free vector such as one copied as a JavaScript array", (): void => {
        const vectorIo = "[3,5⟩" as Io

        const actual = parseVector(vectorIo)

        expect(actual).toEqual([0, 3, 5] as Vector)
    })

    it("can parse various formats of the empty vector", (): void => {
        expect(parseVector("[]")).toEqual([] as unknown[] as Vector)
        expect(parseVector("[>")).toEqual([] as unknown[] as Vector)
        expect(parseVector("[⟩")).toEqual([] as unknown[] as Vector)
        expect(parseVector("|⟩")).toEqual([] as unknown[] as Vector)
        expect(parseVector("|>")).toEqual([] as unknown[] as Vector)
        expect(parseVector("[ ]")).toEqual([] as unknown[] as Vector)
        expect(parseVector("[ >")).toEqual([] as unknown[] as Vector)
        expect(parseVector("[ ⟩")).toEqual([] as unknown[] as Vector)
        expect(parseVector("| ⟩")).toEqual([] as unknown[] as Vector)
        expect(parseVector("| >")).toEqual([] as unknown[] as Vector)
    })
})
