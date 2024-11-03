import {
    computeSuperScaledVector,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Vector,
    Quotient,
    Rational,
    Irrational,
} from "../../../../../src"
import {
    isScaledVectorSub,
    isScaledVectorSuper,
    isScaledVectorUnison,
    ScaledVector,
} from "../../../../../src/math/numeric/scaledVector"
import { Sub, Super } from "../../../../../src/math/numeric/types"

describe("isScaledVectorSub", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns true if the vector is sub", (): void => {
            const scaledVector = { vector: [-1] } as ScaledVector

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the vector is unison", (): void => {
            const scaledVector = { vector: [] as unknown[] } as ScaledVector

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the vector is super", (): void => {
            const scaledVector = { vector: [1] } as ScaledVector

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns true if the scaled vector is sub", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [-1, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the scaled vector is unison", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [0, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scaled vector is super", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [1, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isScaledVectorSuper", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns false if the vector is sub", (): void => {
            const scaledVector = { vector: [-1] } as ScaledVector

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the vector is unison", (): void => {
            const scaledVector = { vector: [] as unknown[] } as ScaledVector

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the vector is super", (): void => {
            const scaledVector = { vector: [1] } as ScaledVector

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns false if the scaled vector is sub", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [-1, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scaled vector is unison", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [0, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the scaled vector is super", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [1, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isScaledVectorUnison", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns false if the vector is sub", (): void => {
            const scaledVector = { vector: [-1] } as ScaledVector

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the vector is unison", (): void => {
            const scaledVector = { vector: [] as unknown[] } as ScaledVector

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the vector is super", (): void => {
            const scaledVector = { vector: [1] } as ScaledVector

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns false if the scaled vector is sub", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [-1, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the scaled vector is unison", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [0, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the scaled vector is super", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [1, 1] as Quotient,
            } as ScaledVector<Irrational>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperScaledVector", (): void => {
    it("if the scaled vector is sub, flips the vector", (): void => {
        const scaledVector = {
            vector: [-40, 22, 1, 1] as Vector<Rational & Sub>,
        } as ScaledVector<Rational & Sub>

        const actual = computeSuperScaledVector(scaledVector) as ScaledVector<Rational & Super>

        const expected = {
            vector: [40, -22, -1, -1] as Vector<Rational & Super>,
        } as ScaledVector<Rational & Super>
        expect(actual).toEqual(expected)
    })

    it("if the scaled vector is sub, flips the vector, even for an irrational scaled vector, in which case it would be equivalent to negate the scaler - but we don't do that so we can preserve the relationship between the scaled vector and its vector in terms of its numeric properties", (): void => {
        const scaledVector = {
            vector: [-40, 22, 1, 1] as Vector,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<Irrational & Sub>

        const actual: ScaledVector<Irrational & Super> = computeSuperScaledVector(
            scaledVector,
        ) as ScaledVector<Irrational & Super>

        const expected = {
            vector: [40, -22, -1, -1] as Vector<Rational & Super>,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<Irrational & Super>
        expect(actual).toEqual(expected)
    })
})
