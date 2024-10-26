import {
    areScaledVectorsEqual,
    isScaledVectorGreater,
    isScaledVectorGreaterOrEqual,
    isScaledVectorLesser,
    isScaledVectorLesserOrEqual,
    Vector,
    Quotient,
    ScaledVector,
} from "../../../../../src"

describe("areScaledVectorsEqual", (): void => {
    describe("for rational scaled vectors", (): void => {
        it("returns true if the vectors match", (): void => {
            const scaledVectorA = { vector: [0, 0, 1, -1] } as ScaledVector<{ rational: true }>
            const scaledVectorB = { vector: [0, 0, 1, -1] } as ScaledVector<{ rational: true }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the vectors do not match", (): void => {
            const scaledVectorA = { vector: [0, 0, 1, -1] } as ScaledVector<{ rational: true }>
            const scaledVectorB = { vector: [0, 0, -1, -1] } as ScaledVector<{ rational: true }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeFalsy()
        })

        it("works when vectors haven't been trimmed", (): void => {
            const scaledVectorA = { vector: [0, 0] } as ScaledVector<{ rational: true }>
            const scaledVectorB = { vector: [0] } as ScaledVector<{ rational: true }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeTruthy()
        })
    })

    describe("for irrational scaled vectors", (): void => {
        it("returns true if both the vectors and scalers match", (): void => {
            const scaledVectorA = {
                vector: [0, 0, 1, -1] as Vector<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as ScaledVector<{ rational: false }>
            const scaledVectorB = {
                vector: [0, 0, 1, -1] as Vector<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the vectors do not match", (): void => {
            const scaledVectorA = {
                vector: [0, 0, 1, -1] as Vector<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as ScaledVector<{ rational: false }>
            const scaledVectorB = {
                vector: [0, 0, -1, -1] as Vector<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scalers do not match", (): void => {
            const scaledVectorA = {
                vector: [0, 0, 1, -1] as Vector<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as ScaledVector<{ rational: false }>
            const scaledVectorB = {
                vector: [0, 0, 1, -1] as Vector<{ rational: true }>,
                scaler: [1, 2] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeFalsy()
        })
    })

    describe("for a combination of a rational scaledVector and an irrational scaledVector", (): void => {
        it("returns true if they are equivalent", (): void => {
            const scaledVectorA = {
                vector: [0, 0, 1, -1] as Vector<{ rational: true }>,
            } as ScaledVector<{ rational: true }>
            const scaledVectorB = {
                vector: [0, 0, 2, -2] as Vector<{ rational: true }>,
                scaler: [1, 2] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeTruthy()
        })

        it("returns false if they are not equivalent", (): void => {
            const scaledVectorA = {
                vector: [0, 0, 2, -2] as Vector<{ rational: true }>,
            } as ScaledVector<{ rational: true }>
            const scaledVectorB = {
                vector: [0, 0, 2, -2] as Vector<{ rational: true }>,
                scaler: [1, 2] as Quotient,
            } as ScaledVector<{ rational: false }>

            const actual = areScaledVectorsEqual(scaledVectorA, scaledVectorB)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isScaledVectorGreater", (): void => {
    it("returns true if the scaled vector is higher than the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorGreater(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaled vector is equal to the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorGreater(scaledVector, otherScaledVector)

        expect(actual).toBeFalsy()
    })

    it("returns false if the scaled vector is lower than the other", (): void => {
        const scaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorGreater(scaledVector, otherScaledVector)

        expect(actual).toBeFalsy()
    })

    it("example of a rational scaledVector and an irrational scaledVector which are quite close", (): void => {
        const scaledVector = { vector: [-7, -1, 1, 1, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [317, -200], scaler: [1, 2] } as ScaledVector<{
            rational: false
        }>

        const actual = isScaledVectorGreater(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })
})

describe("isScaledVectorLesser", (): void => {
    it("returns false if the scaled vector is higher than the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorLesser(scaledVector, otherScaledVector)

        expect(actual).toBeFalsy()
    })

    it("returns false if the scaled vector is equal to the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorLesser(scaledVector, otherScaledVector)

        expect(actual).toBeFalsy()
    })

    it("returns true if the scaled vector is lower than the other", (): void => {
        const scaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorLesser(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })
})

describe("isScaledVectorGreaterOrEqual", (): void => {
    it("returns true if the scaled vector is higher than the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorGreaterOrEqual(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })

    it("returns true if the scaled vector is equal to the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorGreaterOrEqual(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaled vector is lower than the other", (): void => {
        const scaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorGreaterOrEqual(scaledVector, otherScaledVector)

        expect(actual).toBeFalsy()
    })
})

describe("isScaledVectorLesserOrEqual", (): void => {
    it("returns false if the scaled vector is higher than the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorLesserOrEqual(scaledVector, otherScaledVector)

        expect(actual).toBeFalsy()
    })

    it("returns true if the scaled vector is equal to the other", (): void => {
        const scaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorLesserOrEqual(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })

    it("returns true if the scaled vector is lower than the other", (): void => {
        const scaledVector = { vector: [-3, 2] } as ScaledVector<{ rational: true }>
        const otherScaledVector = { vector: [-2, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = isScaledVectorLesserOrEqual(scaledVector, otherScaledVector)

        expect(actual).toBeTruthy()
    })
})
