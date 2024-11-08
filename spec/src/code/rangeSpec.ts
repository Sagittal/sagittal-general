import { computeRange, Decimal, Integer } from "../../../src"

describe("computeRange", (): void => {
    it("when given a single integer decimal, gives the set of integer decimals from 0 to itself, excluding itself", (): void => {
        const firstParameter = 3 as Decimal<Integer>

        const actual = computeRange(firstParameter)

        const expected = [0, 1, 2] as Array<Decimal<Integer>>
        expect(actual).toEqual(expected)
    })

    it("when given two integer decimals, gives the set of integer decimals from the first to the second, excluding the greater number", (): void => {
        const firstParameter = -3 as Decimal<Integer>
        const secondParameter = 7 as Decimal<Integer>

        const actual = computeRange(firstParameter, secondParameter)

        const expected = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6] as Array<Decimal<Integer>>
        expect(actual).toEqual(expected)
    })
})
