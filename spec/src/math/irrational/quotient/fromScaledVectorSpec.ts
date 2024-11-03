import { Irrational, IRRATIONAL_SCALED_VECTOR_BASE_VECTOR, Quotient, ScaledVector } from "../../../../../src"
import { computeIrrationalQuotientFromScaledVector } from "../../../../../src/math/irrational/quotient"

describe("computeIrrationalQuotientFromScaledVector", (): void => {
    it("returns a dumb irrational quotient, essentially the same irrational decimal you would have gotten, but over 1            ", (): void => {
        const irrationalScaledVector = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [6.400178, 1] as Quotient,
        } as ScaledVector<Irrational>

        const actual = computeIrrationalQuotientFromScaledVector(irrationalScaledVector)

        const expected = [84.45893, 1] as Quotient<Irrational>
        expect(actual).toBeCloseToObject(expected)
    })
})
