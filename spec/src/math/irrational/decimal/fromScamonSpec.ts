import {
    computeIrrationalDecimalFromScamon,
    Decimal,
    IRRATIONAL_SCAMON_BASE_MONZO,
    Quotient,
    Scamon,
} from "../../../../../src"

describe("computeIrrationalDecimalFromScamon", (): void => {
    it("given an irrational scamon, returns an irrational decimal", (): void => {
        const irrationalScamon = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Scamon<{rational: false}>

        const actual = computeIrrationalDecimalFromScamon(irrationalScamon)

        const expected = 84.45893 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })
})
