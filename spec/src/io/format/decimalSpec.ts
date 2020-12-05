import {
    alignFormattedDecimal,
    Decimal,
    formatDecimal,
    formatIntegerDecimal,
    Formatted,
    ioSettings,
    TableFormat,
} from "../../../../src"

describe("alignFormattedDecimal", (): void => {
    it("shifts over numbers so that the decimal places align", (): void => {
        expect(alignFormattedDecimal("2.340" as Formatted<number>))
            .toBe("  2.340")
        expect(alignFormattedDecimal("-2.340" as Formatted<number>))
            .toBe(" -2.340")
        expect(alignFormattedDecimal("-12.340" as Formatted<number>))
            .toBe("-12.340")
        expect(alignFormattedDecimal("12.340" as Formatted<number>))
            .toBe(" 12.340")
    })
})

describe("formatDecimal", (): void => {
    it("always shows 3 decimal places", (): void => {
        expect(formatDecimal(0.12340)).toBe("0.123")
    })

    it("includes a trailing zero", (): void => {
        expect(formatDecimal(12.340)).toBe("12.340")
    })

    it("supports aligning", (): void => {
        expect(formatDecimal(12.340, {align: true})).toBe(" 12.340")
    })

    it("does not align when formatting for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        expect(formatDecimal(12.340, {align: true})).toBe("12.340")
    })

    it("adds trailing zeroes to integer decimals", (): void => {
        expect(formatDecimal(12)).toBe("12.000")
    })
})

describe("formatIntegerDecimal", (): void => {
    const integerDecimal = 1 as Decimal<{integer: true}>

    it("provides the same centering (3 digits, decimal point, 3 digits) as with formatted numbers", (): void => {
        const actual = formatIntegerDecimal(integerDecimal)

        const expected = "1"
        expect(actual).toBe(expected)
    })

    it("supports aligning (for tables)", (): void => {
        const actual = formatIntegerDecimal(integerDecimal, {align: true})

        const expected = "  1    "
        expect(actual).toBe(expected)
    })

    it("does not align when formatting for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET

        const actual = formatIntegerDecimal(integerDecimal, {align: true})

        const expected = "1"
        expect(actual).toBe(expected)
    })
})
