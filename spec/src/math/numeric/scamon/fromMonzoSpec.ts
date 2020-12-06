import {computeScamonFromMonzo, Monzo, Quotient, Scamon} from "../../../../../src"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../src"

describe("computeScamonFromMonzo", (): void => {
    it("when given a rational monzo, returns a rational scamon with that monzo as its monzo", (): void => {
        const monzo = [0, 0, -2, 2] as Monzo<{rational: true}>

        const actual = computeScamonFromMonzo(monzo)

        const expected = {monzo} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational monzo, returns a irrational scamon", (): void => {
        const monzo = [-5.5, 3.5] as Monzo<{rational: false}>

        const actual = computeScamonFromMonzo(monzo)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.047369, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})
