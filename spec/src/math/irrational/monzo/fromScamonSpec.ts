import {Monzo, Quotient, Scamon} from "../../../../../src"
import {computeIrrationalMonzoFromScamon} from "../../../../../src/math/irrational/monzo"

describe("computeIrrationalMonzoFromScamon", (): void => {
    it("works for a irrational scamon", (): void => {
        const irrationalScamon = {
            monzo: [-1, 0, -1, 0, 1],
            scaler: [1, 3] as Quotient,
        } as Scamon<{rational: false}>

        const actual = computeIrrationalMonzoFromScamon(irrationalScamon)

        const expected = [-1 / 3, 0, -1 / 3, 0, 1 / 3] as Monzo<{rational: false}>
        expect(actual).toEqual(expected)
    })
})
