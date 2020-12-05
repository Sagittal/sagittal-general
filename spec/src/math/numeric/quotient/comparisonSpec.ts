import {areQuotientsEqual, Quotient} from "../../../../../src/math"

describe("areQuotientsEqual", (): void => {
    it("returns true when the quotients are equal", (): void => {
        const quotientA = [11, 10] as Quotient
        const quotientB = [11, 10] as Quotient

        const actual = areQuotientsEqual(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })

    it("returns false when the quotients are not equal", (): void => {
        const quotientA = [11, 10] as Quotient
        const quotientB = [11, 9] as Quotient

        const actual = areQuotientsEqual(quotientA, quotientB)

        expect(actual).toBeFalsy()
    })

    it("returns true when the quotients are equal when reduced to lowest terms", (): void => {
        const quotientA = [11, 10] as Quotient
        const quotientB = [33, 30] as Quotient

        const actual = areQuotientsEqual(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })

    it("returns true when the quotients are equal, even if they are irrational", (): void => {
        const quotientA = [11.1, 7.2] as Quotient
        const quotientB = [11.1, 7.2] as Quotient

        const actual = areQuotientsEqual(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })

    it("returns true when quotients are equal when reduced to lowest terms, even if they are irrational", (): void => {
        const quotientA = [11.1, 7.2] as Quotient
        const quotientB = [22.2, 14.4] as Quotient

        const actual = areQuotientsEqual(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })
})
