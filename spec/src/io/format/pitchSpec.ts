import { formatPitch, Formatted, Vector, Quotient, ScaledVector } from "../../../../src"

describe("formatPitch", (): void => {
    it("if only the vector is present, returns the vector formatted", (): void => {
        const pitch = { vector: [0, -1, 1] } as ScaledVector<{ rational: true }>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<ScaledVector>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present and rational, shows it in parens out to the right of the vector", (): void => {
        const pitch = {
            vector: [0, -1, 1] as Vector<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<{ rational: false }>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩(1/2)" as Formatted<ScaledVector>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present but not rational, shows a cents representation of the whole thing", (): void => {
        const pitch = {
            vector: [0, -1, 1] as Vector<{ rational: true }>,
            scaler: [1.238923, 1] as Quotient,
        } as ScaledVector<{ rational: false }>

        const actual = formatPitch(pitch)

        const expected = "1095.652¢" as Formatted<ScaledVector>
        expect(actual).toBe(expected)
    })

    it("can return the decimal aligned (for tables)", (): void => {
        const pitch = {
            vector: [0, -1, 1] as Vector<{ rational: true }>,
            scaler: [1.238923, 1] as Quotient,
        } as ScaledVector<{ rational: false }>

        const actual = formatPitch(pitch, { align: true })

        const expected = "      1095.652¢" as Formatted<ScaledVector>
        expect(actual).toBe(expected)
    })
})
