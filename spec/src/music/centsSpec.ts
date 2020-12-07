import {
    APOTOME,
    Cents,
    computeCentsFromPitch,
    computePitchFromCents,
    Decimal,
    dividePitch,
    halveScamon,
    IRRATIONAL_SCAMON_BASE_MONZO,
    Scamon,
} from "../../../src"

describe("dividePitch", (): void => {
    it("returns the proportion the part pitch is of the whole pitch", (): void => {
        const actual = dividePitch(halveScamon(APOTOME), APOTOME)

        const expected = 0.5 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computePitchFromCents", (): void => {
    it("when given a cents value that is almost certainly a JI pitch, still doesn't presume to return one                ", (): void => {
        const cents = 701.955000865 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.584963, 1],
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a cents value that does not correspond to a JI pitch, doesn't try to guess a rational quotient (i.e. in this case it might try to guess ", (): void => {
        const cents = 600 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.5, 1],
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a monzo", (): void => {
        const pitch = {monzo: [-1, 2, 0, -2, 1]} as Scamon<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos with really big 2 exponents", (): void => {
        const pitch = {monzo: [317, -200]} as Scamon<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 8.999826 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos that are greater than an octave", (): void => {
        const pitch = {monzo: [0, 1]} as Scamon<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("another example, negative", (): void => {
        const pitch = {monzo: [2, 1, 0, 0, 0, -1]} as Scamon<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge 3-limit example, upwards", (): void => {
        const pitch = {monzo: [-1726, 1330]} as Scamon<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = 458400.151151 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for this huge 3-limit example, downwards", (): void => {
        const pitch = {monzo: [1726, -1330]} as Scamon<{rational: true}>

        const actual = computeCentsFromPitch(pitch)

        const expected = -458400.151151 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
