import { isRationalScaledVectorRough, ScaledVector } from "../../../../../src"
import { Roughness } from "../../../../../src/math"

describe("isRationalScaledVectorRough", (): void => {
    it("returns true if the scaled vector is n-rough (has no prime factors less than the prime min)", (): void => {
        const rationalScaledVector = { vector: [0, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isRationalScaledVectorRough(rationalScaledVector, 5 as 5 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaled vector has no prime factors less than the prime min", (): void => {
        const rationalScaledVector = { vector: [0, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isRationalScaledVectorRough(rationalScaledVector, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})
