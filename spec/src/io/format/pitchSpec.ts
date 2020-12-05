import {formatPitch, Formatted, Monzo, Quotient, Scamon} from "../../../../src"

describe("formatPitch", (): void => {
    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const pitch = {monzo: [0, -1, 1]} as Scamon<{rational: true}>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Scamon>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present and rational, shows it in parens out to the right of the monzo", (): void => {
        const pitch = {
            monzo: [0, -1, 1] as Monzo<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Scamon<{rational: false}>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩(1/2)" as Formatted<Scamon>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present but not rational, shows a cents representation of the whole thing", (): void => {
        const pitch = {
            monzo: [0, -1, 1] as Monzo<{rational: true}>,
            scaler: [1.238923, 1] as Quotient,
        } as Scamon<{rational: false}>

        const actual = formatPitch(pitch)

        const expected = "1095.652¢" as Formatted<Scamon>
        expect(actual).toBe(expected)
    })

    it("can return the decimal aligned (for tables)", (): void => {
        const pitch = {
            monzo: [0, -1, 1] as Monzo<{rational: true}>,
            scaler: [1.238923, 1] as Quotient,
        } as Scamon<{rational: false}>

        const actual = formatPitch(pitch, {align: true})

        const expected = "      1095.652¢" as Formatted<Scamon>
        expect(actual).toBe(expected)
    })
})
