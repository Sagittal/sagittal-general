import {
    computeSuperScaledVector,
    Direction,
    EMPTY_VECTOR,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Vector,
    Quotient,
} from "../../../../../src"
import {
    isScaledVectorSub,
    isScaledVectorSuper,
    isScaledVectorUnison,
    ScaledVector,
} from "../../../../../src/math/numeric/scaledVector"

describe("isScaledVectorSub", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns true if the vector is sub", (): void => {
            const scaledVector = { vector: [-1] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the vector is unison", (): void => {
            const scaledVector = { vector: [] as unknown[] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the vector is super", (): void => {
            const scaledVector = { vector: [1] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns true if the scaled vector is sub", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [-1, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the scaled vector is unison", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [0, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scaled vector is super", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [1, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorSub(scaledVector)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isScaledVectorSuper", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns false if the vector is sub", (): void => {
            const scaledVector = { vector: [-1] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the vector is unison", (): void => {
            const scaledVector = { vector: [] as unknown[] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the vector is super", (): void => {
            const scaledVector = { vector: [1] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns false if the scaled vector is sub", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [-1, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scaled vector is unison", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [0, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the scaled vector is super", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [1, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorSuper(scaledVector)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isScaledVectorUnison", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns false if the vector is sub", (): void => {
            const scaledVector = { vector: [-1] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the vector is unison", (): void => {
            const scaledVector = { vector: [] as unknown[] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the vector is super", (): void => {
            const scaledVector = { vector: [1] } as ScaledVector<{ rational: true }>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns false if the scaled vector is sub", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [-1, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })

        it("returns true if the scaled vector is unison", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [0, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeTruthy()
        })

        it("returns false if the scaled vector is super", (): void => {
            const scaledVector = {
                vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
                scaler: [1, 1] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = isScaledVectorUnison(scaledVector)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperScaledVector", (): void => {
    it("if the scaled vector is sub, flips the vector", (): void => {
        const scaledVector = {
            vector: [-40, 22, 1, 1] as Vector<{ rational: true; direction: Direction.SUB }>,
        } as ScaledVector<{ rational: true; direction: Direction.SUB }>

        const actual: ScaledVector<{ rational: true; direction: Direction.SUPER }> =
            computeSuperScaledVector(scaledVector)

        const expected = {
            vector: [40, -22, -1, -1] as Vector<{ rational: true; direction: Direction.SUPER }>,
        } as ScaledVector<{ rational: true; direction: Direction.SUPER }>
        expect(actual).toEqual(expected)
    })

    it("if the scaled vector is sub, flips the vector, even for an irrational scaled vector, in which case it would be equivalent to negate the scaler - but we don't do that so we can preserve the relationship between the scaled vector and its vector in terms of its numeric properties", (): void => {
        const scaledVector = {
            vector: [-40, 22, 1, 1] as Vector<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<{ rational: false; direction: Direction.SUB }>

        // TODO: what the matter
        const actual: ScaledVector<{ rational: false; direction: Direction.SUPER }> =
            computeSuperScaledVector(scaledVector)

        const expected = {
            vector: [40, -22, -1, -1] as Vector<{ rational: true; direction: Direction.SUPER }>,
            scaler: [1, 2] as Quotient,
        } as ScaledVector<{ rational: false; direction: Direction.SUPER }>
        expect(actual).toEqual(expected)
    })

    it("returns unchanged a super scaled vector", (): void => {
        const scaledVector = {
            vector: [40, -22, -1, -1] as Vector<{ rational: true; direction: Direction.SUPER }>,
        } as ScaledVector<{ rational: true; direction: Direction.SUPER }>

        const actual: ScaledVector<{ rational: true; direction: Direction.SUPER }> =
            computeSuperScaledVector(scaledVector)

        expect(actual).toEqual(scaledVector)
    })

    it("returns unchanged a unison scaled vector", (): void => {
        const scaledVector = {
            vector: EMPTY_VECTOR as Vector<{ rational: true; direction: Direction.UNISON }>,
        } as ScaledVector<{ rational: true; direction: Direction.UNISON }>

        const actual: ScaledVector<{ rational: true; direction: Direction.UNISON }> =
            computeSuperScaledVector(scaledVector)

        expect(actual).toEqual(scaledVector)
    })
})
