import {
    alignFormattedDecimal,
    Decimal,
    formatDecimal,
    formatIntegerDecimal,
    Formatted,
    Integer,
    ioSettings,
    TableFormat,
} from "../../../../src"

describe("alignFormattedDecimal", (): void => {
    it("shifts over numbers so that the decimal places align", (): void => {
        expect(alignFormattedDecimal("2.340" as Formatted<number>)).toBe("  2.340")
        expect(alignFormattedDecimal("-2.340" as Formatted<number>)).toBe(" -2.340")
        expect(alignFormattedDecimal("-12.340" as Formatted<number>)).toBe("-12.340")
        expect(alignFormattedDecimal("12.340" as Formatted<number>)).toBe(" 12.340")
    })
})

describe("formatDecimal", (): void => {
    it("always shows 3 decimal places", (): void => {
        expect(formatDecimal(0.1234)).toBe("0.123")
    })

    it("includes a trailing zero", (): void => {
        expect(formatDecimal(12.34)).toBe("12.340")
    })

    it("supports aligning", (): void => {
        expect(formatDecimal(12.34, { align: true })).toBe(" 12.340")
    })

    it("does not align when formatting for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        expect(formatDecimal(12.34, { align: true })).toBe("12.340")
    })

    it("adds trailing zeroes to integer decimals", (): void => {
        expect(formatDecimal(12)).toBe("12.000")
    })
})

describe("formatIntegerDecimal", (): void => {
    const integerDecimal = 1 as Decimal<Integer>

    it("provides the same centering (3 digits, decimal point, 3 digits) as with formatted numbers", (): void => {
        const actual = formatIntegerDecimal(integerDecimal)

        const expected = "1"
        expect(actual).toBe(expected)
    })

    it("supports aligning (for tables)", (): void => {
        const actual = formatIntegerDecimal(integerDecimal, { align: true })

        const expected = "  1    "
        expect(actual).toBe(expected)
    })

    it("does not align when formatting for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET

        const actual = formatIntegerDecimal(integerDecimal, { align: true })

        const expected = "1"
        expect(actual).toBe(expected)
    })

    it("still maxes out at 7 chars if it has a negative large number", (): void => {
        expect(formatIntegerDecimal(-100 as Decimal<Integer>, { align: true })).toBe("-100   ")
        expect(formatIntegerDecimal(-1000 as Decimal<Integer>, { align: true })).toBe("-1000  ")
        expect(formatIntegerDecimal(-10000 as Decimal<Integer>, { align: true })).toBe("-10000 ")
        expect(formatIntegerDecimal(-100000 as Decimal<Integer>, { align: true })).toBe("-100000")
        expect(formatIntegerDecimal(-1000000 as Decimal<Integer>, { align: true })).toBe("-1000000") // Now it starts increasing the width
    })
})
