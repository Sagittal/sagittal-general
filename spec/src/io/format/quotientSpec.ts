import { formatQuotient, Formatted, ioSettings, Quotient, TableFormat, Two3FreeClass } from "../../../../src"

describe("formatQuotient", (): void => {
    it("it shows it with a slash", (): void => {
        const quotient = [77, 75] as Quotient

        const actual = formatQuotient(quotient)

        const expected = "77/75"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon, orienting it properly if it is sub", (): void => {
        const quotient = [75, 77] as Quotient

        const actual = formatQuotient(quotient, { directed: false })

        const expected = "75:77"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon, orienting it properly if it is super", (): void => {
        const quotient = [77, 75] as Quotient

        const actual = formatQuotient(quotient, { directed: false })

        const expected = "75:77"
        expect(actual).toBe(expected)
    })

    it("can format it for the forum, using the LaTeX bbCode, and canceling out the pre tag so it will display properly", (): void => {
        const quotient = [77, 75] as Quotient

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatQuotient(quotient)

        const expected = "[latex]\\frac{77}{75}[/latex]" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("can override the LaTeX formatting", (): void => {
        const quotient = [77, 75] as Quotient

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatQuotient(quotient, { noLaTeXMultiplier: true })

        const expected = "77/75" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("drops the denominator when it is 1 and the quotient is directed", (): void => {
        const quotient = [77, 1] as Quotient

        const actual = formatQuotient(quotient)

        const expected = "77"
        expect(actual).toBe(expected)
    })

    it("does not drop a denominator of 1 when undirected", (): void => {
        const quotient = [77, 1] as Quotient

        const actual = formatQuotient(quotient, { directed: false })

        const expected = "1:77"
        expect(actual).toBe(expected)
    })

    it("can drop the denominator of 1 when formatting for the forum", (): void => {
        const quotient = [77, 1] as Quotient

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatQuotient(quotient)

        const expected = "[latex]77[/latex]" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("formats quotients with huge fractional parts friendlily", (): void => {
        const quotient = [Infinity, Infinity] as Quotient

        const actual = formatQuotient(quotient)

        const expected = "(too big for JS)/(too big for JS)"
        expect(actual).toBe(expected)
    })
})
