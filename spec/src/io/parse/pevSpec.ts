import {Io, Pev, parsePev} from "../../../../src"

describe("parsePev", (): void => {
    const expected = [3, 4, -5] as Pev

    it("parses pevs", (): void => {
        const pevIo = "[3,4,-5]" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted pevs", (): void => {
        const pevIo = "[ 3 4 -5 ⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("parses pevs given with greater than signs", (): void => {
        const pevIo = "[ 3 4 -5 >" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("parses pevs given with pipes", (): void => {
        const pevIo = "| 3 4 -5 ⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("parses pevs given with no spaces on the ends", (): void => {
        const pevIo = "[3 4 -5⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("parses pevs as they are returned by scripts, with the extra spaces to align them", (): void => {
        const pevIo = "[   3   4  -5 ⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const pevIo = "[3, 4, -5]" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const pevIo = "[3\t4\t-5]" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational pevs", (): void => {
        const pevIo = "[-9.5\t6]" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual([-9.5, 6] as Pev)
    })

    it("can handle George Secor's punctuated format", (): void => {
        const pevIo = "[3 4, 0 1 2, 6⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual([3, 4, 0, 1, 2, 6] as Pev)
    })

    it("can handle abbreviated format", (): void => {
        const pevIo = "[-8 -6 3 5 -1 0 0 0 5 4 2 3⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Pev)
    })

    it("can handle abbreviated and punctuated format", (): void => {
        const pevIo = "[-8 -6,3 5 -1,,5 4 2,,,3⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Pev)
    })

    it("can handle 2,3-free pevs in abbreviated and punctuated format", (): void => {
        const pevIo = "[,5 7⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual([0, 0, 5, 7] as Pev)
    })

    it("can handle 2-free pevs in abbreviated and punctuated format, when the presence of angle brackets or the like make it clear that it is not supposed to be a non 2-free pev such as one copied as a JavaScript array", (): void => {
        const pevIo = "[3,5⟩" as Io

        const actual = parsePev(pevIo)

        expect(actual).toEqual([0, 3, 5] as Pev)
    })

    it("can parse various formats of the empty pev", (): void => {
        expect(parsePev("[]")).toEqual([] as Pev)
        expect(parsePev("[>")).toEqual([] as Pev)
        expect(parsePev("[⟩")).toEqual([] as Pev)
        expect(parsePev("|⟩")).toEqual([] as Pev)
        expect(parsePev("|>")).toEqual([] as Pev)
        expect(parsePev("[ ]")).toEqual([] as Pev)
        expect(parsePev("[ >")).toEqual([] as Pev)
        expect(parsePev("[ ⟩")).toEqual([] as Pev)
        expect(parsePev("| ⟩")).toEqual([] as Pev)
        expect(parsePev("| >")).toEqual([] as Pev)
    })
})
