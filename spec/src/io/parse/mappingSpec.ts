import {Io, Mapping} from "../../../../src"
import {parseMapping} from "../../../../src/io/parse/mapping"

describe("parseMapping", (): void => {
    const expected = [3, 4, -5] as Mapping

    it("parses mappings", (): void => {
        const mappingIo = "[3,4,-5]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted mappings", (): void => {
        const mappingIo = "⟨ 3 4 -5 ]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("parses mappings given with less than signs", (): void => {
        const mappingIo = "< 3 4 -5 ]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("parses mappings given with pipes", (): void => {
        const mappingIo = "⟨ 3 4 -5 |" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("parses mappings given with no spaces on the ends", (): void => {
        const mappingIo = "⟨3 4 -5]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("parses mappings as they are returned by scripts, with the extra spaces to align them", (): void => {
        const mappingIo = "⟨   3   4  -5 ]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const mappingIo = "[3, 4, -5]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const mappingIo = "[3\t4\t-5]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational mappings", (): void => {
        const mappingIo = "[-9.5\t6]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual([-9.5, 6] as Mapping)
    })

    it("can handle George Secor's punctuated format", (): void => {
        const mappingIo = "⟨3 4, 0 1 2, 6]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual([3, 4, 0, 1, 2, 6] as Mapping)
    })

    it("can handle abbreviated format", (): void => {
        const mappingIo = "⟨-8 -6 3 5 -1 0 0 0 5 4 2 3]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Mapping)
    })

    it("can handle abbreviated and punctuated format", (): void => {
        const mappingIo = "⟨-8 -6,3 5 -1,,5 4 2,,,3]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Mapping)
    })

    it("can handle 2,3-free mappings in abbreviated and punctuated format", (): void => {
        const mappingIo = "⟨,5 7]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual([0, 0, 5, 7] as Mapping)
    })

    it("can handle 2-free mappings in abbreviated and punctuated format, when the presence of angle brackets or the like make it clear that it is not supposed to be a non 2-free mapping such as one copied as a JavaScript array", (): void => {
        const mappingIo = "⟨3,5]" as Io

        const actual = parseMapping(mappingIo)

        expect(actual).toEqual([0, 3, 5] as Mapping)
    })
})
