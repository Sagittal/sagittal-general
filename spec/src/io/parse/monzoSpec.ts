import {Io, Monzo, parseMonzo} from "../../../../src"

describe("parseMonzo", (): void => {
    const expected = [3, 4, -5] as Monzo

    it("parses monzos", (): void => {
        const monzoIo = "[3,4,-5]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted monzos", (): void => {
        const monzoIo = "[ 3 4 -5 ⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with greater than signs", (): void => {
        const monzoIo = "[ 3 4 -5 >" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with pipes", (): void => {
        const monzoIo = "| 3 4 -5 ⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with no spaces on the ends", (): void => {
        const monzoIo = "[3 4 -5⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos as they are returned by scripts, with the extra spaces to align them", (): void => {
        const monzoIo = "[   3   4  -5 ⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const monzoIo = "[3, 4, -5]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const monzoIo = "[3\t4\t-5]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational monzos", (): void => {
        const monzoIo = "[-9.5\t6]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([-9.5, 6] as Monzo)
    })

    it("can handle George Secor's punctuated format", (): void => {
        const monzoIo = "[3 4, 0 1 2, 6⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([3, 4, 0, 1, 2, 6] as Monzo)
    })

    it("can handle abbreviated format", (): void => {
        const monzoIo = "[-8 -6 3 5 -1 0 0 0 5 4 2 3⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Monzo)
    })

    it("can handle abbreviated and punctuated format", (): void => {
        const monzoIo = "[-8 -6,3 5 -1,,5 4 2,,,3⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 0, 0, 0, 0, 0, 0, 3] as Monzo)
    })

    it("can handle 2,3-free monzos in abbreviated and punctuated format", (): void => {
        const monzoIo = "[,5 7⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([0, 0, 5, 7] as Monzo)
    })

    it("can handle 2-free monzos in abbreviated and punctuated format, when the presence of angle brackets or the like make it clear that it is not supposed to be a non 2-free monzo such as one copied as a JavaScript array", (): void => {
        const monzoIo = "[3,5⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([0, 3, 5] as Monzo)
    })

    it("can parse various formats of the empty monzo", (): void => {
        expect(parseMonzo("[]")).toEqual([] as Monzo)
        expect(parseMonzo("[>")).toEqual([] as Monzo)
        expect(parseMonzo("[⟩")).toEqual([] as Monzo)
        expect(parseMonzo("|⟩")).toEqual([] as Monzo)
        expect(parseMonzo("|>")).toEqual([] as Monzo)
        expect(parseMonzo("[ ]")).toEqual([] as Monzo)
        expect(parseMonzo("[ >")).toEqual([] as Monzo)
        expect(parseMonzo("[ ⟩")).toEqual([] as Monzo)
        expect(parseMonzo("| ⟩")).toEqual([] as Monzo)
        expect(parseMonzo("| >")).toEqual([] as Monzo)
    })
})
