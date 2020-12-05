import {computeIrrationalDecimalFromScamon, Decimal, Quotient, Scamon} from "../../../../../src"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../src/math/irrational/scamon/constants"

describe("computeIrrationalDecimalFromScamon", (): void => {
    it("given a irrational scamon, returns an irrational decimal", (): void => {
        const irrationalScamon = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Scamon<{rational: false}>

        const actual = computeIrrationalDecimalFromScamon(irrationalScamon)

        const expected = 84.45893 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })
})
