import {IRRATIONAL_SCAMON_BASE_MONZO, Monzo, Quotient, Scamon} from "../../../../../src"
import {computeIrrationalScamonFromMonzo} from "../../../../../src/math/irrational"

describe("computeIrrationalScamonFromMonzo", (): void => {
    it("when given a monzo, returns a irrational scamon", (): void => {
        const monzo = [-5.5, 3.5] as Monzo

        const actual = computeIrrationalScamonFromMonzo(monzo)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.047369, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a rational monzo, still returns a irrational scamon", (): void => {
        const monzo = [-11, 7] as Monzo<{rational: true}>

        const actual = computeIrrationalScamonFromMonzo(monzo)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.094738, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
