import {computePlusOrMinusRange, Decimal} from "../../../src"

describe("computePlusOrMinusRange", (): void => {
    it("given an integer decimal, returns a range of integer decimals from its negation to itself, inclusive            ", (): void => {
        const integerDecimal = 5 as Decimal<{integer: true}>

        const actual = computePlusOrMinusRange(integerDecimal)

        expect(actual as number[]).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    })
})
