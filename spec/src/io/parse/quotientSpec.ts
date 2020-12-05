import {Io, parseQuotient, Quotient} from "../../../../src"

describe("parseQuotient", (): void => {
    it("works for directed quotients", (): void => {
        const quotientIo = "5/4" as Io

        const actual = parseQuotient(quotientIo)

        const expected = [5, 4] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for directed quotients", (): void => {
        const quotientIo = "5:4" as Io

        const actual = parseQuotient(quotientIo)

        const expected = [4, 5] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for quotients which are implicitly over 1", (): void => {
        const quotientIo = "275" as Io

        const actual = parseQuotient(quotientIo)

        const expected = [275, 1] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for factored quotients", (): void => {
        const quotientIo = "5²⋅11" as Io

        const actual = parseQuotient(quotientIo)

        const expected = [275, 1] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for factored quotients, using the period rather than the dot operator", (): void => {
        const quotientIo = "5².11" as Io

        const actual = parseQuotient(quotientIo)

        const expected = [275, 1] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("does not do the work of reducing quotients", (): void => {
        const quotientIo = "25/20" as Io

        const actual = parseQuotient(quotientIo)

        const expected = [25, 20] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
