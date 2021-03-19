import {computeRoughRationalPev, EMPTY_PEV, isRationalPevRough, Pev, Roughness} from "../../../../../src/math"

describe("computeRoughRationalPev", (): void => {
    it("roughens the pev to the requested roughness (setting initial elements of the pev to 0)", (): void => {
        const rationalPev = [5, 6, 1, 0, 3] as Pev<{rational: true}>
        const roughness = 5 as 5 & Roughness

        const actual: Pev<{rational: true, rough: 5}> = computeRoughRationalPev(rationalPev, roughness)

        const expected = [0, 0, 1, 0, 3] as Pev<{rational: true, rough: 5}>
        expect(actual).toEqual(expected)
    })

    it("trims the pev if necessary (after setting elements to 0, the pev may be emptied)", (): void => {
        const rationalPev = [5, 6] as Pev<{rational: true}>
        const roughness = 5 as 5 & Roughness

        const actual: Pev<{rational: true, rough: 5}> = computeRoughRationalPev(rationalPev, roughness)

        const expected = EMPTY_PEV as Pev<{rational: true, rough: 5}>
        expect(actual).toEqual(expected)
    })
})

describe("isRationalPevRough", (): void => {
    it("returns true if the pev is at the requested roughness", (): void => {
        const rationalPev = [0, 0, 0, 4, 3] as Pev<{rational: true}>

        const actual = isRationalPevRough(rationalPev, 7 as 7 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pev is not at the requested roughness", (): void => {
        const rationalPev = [0, -5, 0, 4, 3] as Pev<{rational: true}>

        const actual = isRationalPevRough(rationalPev, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})
