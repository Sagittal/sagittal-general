import {
    APOTOME,
    Cents,
    computeCentsFromPitch,
    computePitchFromCents,
    Decimal,
    dividePitch,
    halveSpev,
    IRRATIONAL_SPEV_BASE_PEV,
    Spev,
} from "../../../src"

describe("dividePitch", (): void => {
    it("returns the proportion the part pitch is of the whole pitch", (): void => {
        const actual = dividePitch(halveSpev(APOTOME), APOTOME)

        const expected = 0.5 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computePitchFromCents", (): void => {
    it("when given a cents value that is almost certainly a JI pitch, still doesn't presume to return one                ", (): void => {
        const cents = 701.955000865 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.584963, 1],
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a cents value that does not correspond to a JI pitch, doesn't try to guess a rational quotient (i.e. in this case it might try to guess ", (): void => {
        const cents = 600 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            pev: IRRATIONAL_SPEV_BASE_PEV,
            scaler: [0.5, 1],
        } as Spev<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a pev", (): void => {
        const pitch = {pev: [-1, 2, 0, -2, 1]} as Spev<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with pevs with really big 2 exponents", (): void => {
        const pitch = {pev: [317, -200]} as Spev<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 8.999826 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with pevs that are greater than an octave", (): void => {
        const pitch = {pev: [0, 1]} as Spev<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("another example, negative", (): void => {
        const pitch = {pev: [2, 1, 0, 0, 0, -1]} as Spev<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge 3-limit example, upwards", (): void => {
        const pitch = {pev: [-1726, 1330]} as Spev<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 458400.151151 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge 3-limit example, downwards", (): void => {
        const pitch = {pev: [1726, -1330]} as Spev<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = -458400.151151 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
