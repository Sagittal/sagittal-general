import {
    APOTOME,
    Cents,
    computeCentsFromPitch,
    computePitchFromCents,
    Decimal,
    dividePitch,
    halveScaledVector,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    ScaledVector,
} from "../../../src"

describe("dividePitch", (): void => {
    it("returns the proportion the part pitch is of the whole pitch", (): void => {
        const actual = dividePitch(halveScaledVector(APOTOME), APOTOME)

        const expected = 0.5 as Decimal<{ rational: false }>
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computePitchFromCents", (): void => {
    it("when given a cents value that is almost certainly a JI pitch, still doesn't presume to return one", (): void => {
        const cents = 701.955000865 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.584963, 1],
        } as ScaledVector<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a cents value that does not correspond to a JI pitch, doesn't try to guess a rational quotient (i.e. in this case it might try to guess ", (): void => {
        const cents = 600 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [0.5, 1],
        } as ScaledVector<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a vector", (): void => {
        const pitch = { vector: [-1, 2, 0, -2, 1] } as ScaledVector<
            { rational: true }
        >

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with vectors with really big counts of prime 2", (): void => {
        const pitch = { vector: [317, -200] } as ScaledVector<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = 8.999826 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with vectors that are greater than an octave", (): void => {
        const pitch = { vector: [0, 1] } as ScaledVector<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("another example, negative", (): void => {
        const pitch = { vector: [2, 1, 0, 0, 0, -1] } as ScaledVector<
            { rational: true }
        >

        const actual = computeCentsFromPitch(pitch)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge 3-limit example, upwards", (): void => {
        const pitch = { vector: [-1726, 1330] } as ScaledVector<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = 458400.151151 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge 3-limit example, downwards", (): void => {
        const pitch = { vector: [1726, -1330] } as ScaledVector<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = -458400.151151 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
