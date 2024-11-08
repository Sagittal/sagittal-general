import { Decimal, Integer, mod } from "../../../../../src"

describe("mod", (): void => {
    it("works", (): void => {
        expect(mod(57 as Decimal<Integer>, 19 as Decimal<Integer>)).toEqual(0 as Decimal<Integer>)
        expect(mod(57 as Decimal<Integer>, 10 as Decimal<Integer>)).toEqual(7 as Decimal<Integer>)
        expect(mod(-2 as Decimal<Integer>, 10 as Decimal<Integer>)).toEqual(8 as Decimal<Integer>)
    })
})
