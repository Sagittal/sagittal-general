import { Io, Map } from "../../../../src"
import { parseMap } from "../../../../src/io/parse/map"

describe("parseMap", (): void => {
    const expected = [3, 4, -5] as Map

    it("parses maps", (): void => {
        const mapIo = "[3,4,-5]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted maps", (): void => {
        const mapIo = "⟨ 3 4 -5 ]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("parses maps given with less than signs", (): void => {
        const mapIo = "< 3 4 -5 ]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("parses maps given with pipes", (): void => {
        const mapIo = "⟨ 3 4 -5 |" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("parses maps given with no spaces on the ends", (): void => {
        const mapIo = "⟨3 4 -5]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("parses maps as they are returned by scripts, with the extra spaces to align them", (): void => {
        const mapIo = "⟨   3   4  -5 ]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const mapIo = "[3, 4, -5]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const mapIo = "[3\t4\t-5]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational maps", (): void => {
        const mapIo = "[-9.5\t6]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual([-9.5, 6] as Map)
    })

    it("can handle George Secor's punctuated format", (): void => {
        const mapIo = "⟨3 4, 0 1 2, 6]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual([3, 4, 0, 1, 2, 6] as Map)
    })

    it("can handle abbreviated format", (): void => {
        const mapIo = "⟨-8 -6 3 5 -1 0 0 0 5 4 2 3]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Map)
    })

    it("can handle abbreviated and punctuated format", (): void => {
        const mapIo = "⟨-8 -6,3 5 -1,,5 4 2,,,3]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual([
            -8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3,
        ] as Map)
    })

    it("can handle 2,3-free maps in abbreviated and punctuated format", (): void => {
        const mapIo = "⟨,5 7]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual([0, 0, 5, 7] as Map)
    })

    it("can handle 2-free maps in abbreviated and punctuated format, when the presence of angle brackets or the like make it clear that it is not supposed to be a non 2-free map such as one copied as a JavaScript array", (): void => {
        const mapIo = "⟨3,5]" as Io

        const actual = parseMap(mapIo)

        expect(actual).toEqual([0, 3, 5] as Map)
    })
})
