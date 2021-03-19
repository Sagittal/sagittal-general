import {formatPitch, Formatted, Pev, Quotient, Spev} from "../../../../src"

describe("formatPitch", (): void => {
    it("if only the pev is present, returns the pev formatted", (): void => {
        const pitch = {pev: [0, -1, 1]} as Spev<{rational: true}>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Spev>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present and rational, shows it in parens out to the right of the pev", (): void => {
        const pitch = {
            pev: [0, -1, 1] as Pev<{rational: true}>,
            scaler: [1, 2] as Quotient,
        } as Spev<{rational: false}>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩(1/2)" as Formatted<Spev>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present but not rational, shows a cents representation of the whole thing", (): void => {
        const pitch = {
            pev: [0, -1, 1] as Pev<{rational: true}>,
            scaler: [1.238923, 1] as Quotient,
        } as Spev<{rational: false}>

        const actual = formatPitch(pitch)

        const expected = "1095.652¢" as Formatted<Spev>
        expect(actual).toBe(expected)
    })

    it("can return the decimal aligned (for tables)", (): void => {
        const pitch = {
            pev: [0, -1, 1] as Pev<{rational: true}>,
            scaler: [1.238923, 1] as Quotient,
        } as Spev<{rational: false}>

        const actual = formatPitch(pitch, {align: true})

        const expected = "      1095.652¢" as Formatted<Spev>
        expect(actual).toBe(expected)
    })
})
