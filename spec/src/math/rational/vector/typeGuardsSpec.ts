import { isVectorRational, Vector } from "../../../../../src"
import { isVectorInteger } from "../../../../../src/math/rational/vector/typeGuards"

describe("isVectorInteger", (): void => {
    it("returns true if every entry is positive or zero", (): void => {
        const candidateIntegerVector = [0, 2, 0, 1] as Vector

        const actual = isVectorInteger(candidateIntegerVector)

        expect(actual).toBeTruthy()
    })

    it("returns false if every entry is negative or zero", (): void => {
        const candidateIntegerVector = [-3, 0, -5] as Vector

        const actual = isVectorInteger(candidateIntegerVector)

        expect(actual).toBeFalsy()
    })

    it("returns false if the entrys are not all positive or zero or all negative or zero", (): void => {
        const candidateIntegerVector = [-2, 0, 1] as Vector

        const actual = isVectorInteger(candidateIntegerVector)

        expect(actual).toBeFalsy()
    })

    it("returns false if any of the entrys are not integer decimals", (): void => {
        const candidateIntegerVector = [0, 2.5, 0, 1] as Vector

        const actual = isVectorInteger(candidateIntegerVector)

        expect(actual).toBeFalsy()
    })
})

describe("isVectorRational", (): void => {
    it("returns true if every entry is an integer", (): void => {
        const candidateRationalVector = [0, 2, 0, 1] as Vector

        const actual = isVectorRational(candidateRationalVector)

        expect(actual).toBeTruthy()
    })

    it("returns true if any entry is not an integer", (): void => {
        const candidateRationalVector = [2.5, 1.5, 0] as Vector

        const actual = isVectorRational(candidateRationalVector)

        expect(actual).toBeFalsy()
    })
})
