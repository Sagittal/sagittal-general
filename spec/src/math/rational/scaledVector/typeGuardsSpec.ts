import { isScaledVectorRational, Vector, Quotient, ScaledVector, Irrational } from "../../../../../src"

describe("isScaledVectorRational", (): void => {
    it("returns true if the scaler is absent", (): void => {
        const candidateRationalScaledVector = { vector: [5, 4] } as ScaledVector

        const actual = isScaledVectorRational(candidateRationalScaledVector)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaler is present", (): void => {
        const candidateRationalScaledVector = {
            vector: [5, 4] as Vector,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<Irrational>

        const actual = isScaledVectorRational(candidateRationalScaledVector)

        expect(actual).toBeFalsy()
    })
})
