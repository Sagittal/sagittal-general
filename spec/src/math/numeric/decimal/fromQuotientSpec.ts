import {computeDecimalFromQuotient, Decimal, Quotient} from "../../../../../src"

describe("computeDecimalFromQuotient", (): void => {
    it("returns the decimal representation of the quotient", (): void => {
        const quotient = [7, 6] as Quotient

        const actual = computeDecimalFromQuotient(quotient)

        const expected = 1.166667 as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })
})
