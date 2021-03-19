import {
    computePevMapping,
    computeStandardMapping,
    Ed,
    Max,
    Pev,
    OCTAVE_WINDOW,
    Prime,
    Step,
    Mapping,
    Window,
} from "../../../../../src"

describe("computePevMapping", (): void => {
    const INSANE_ZETA_PEAK_MAPPING: Mapping<{integer: true}> =
        computeStandardMapping({
            ed: 8539.00834 as Ed<{of: Window<{of: 2}>}>,
            window: OCTAVE_WINDOW,
            primeLimit: 281 as Max<Prime>,
        })

    it("given a mapping mapping, returns the number of steps that would represent the given pev", (): void => {
        const mapping = [8539, 13534, 19827, 23972, 29540, 31598] as Mapping<{integer: true}>
        const pev = [5, -3, 1, -1, -1, 1] as Pev

        const actual = computePevMapping(pev, mapping)

        const expected = 6 as Step<{integer: true}>
        expect(actual).toBe(expected)
    })

    it("checkin' 77/185n maps to 0 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const pev = [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Pev

        const actual = computePevMapping(pev, INSANE_ZETA_PEAK_MAPPING)

        const expected = 0 as Step<{integer: true}>
        expect(actual).toBe(expected)
    })

    it("maps 143/1715n to 7 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const pev = [2, 1, -1, -3, 1, 1] as Pev

        const actual = computePevMapping(pev, INSANE_ZETA_PEAK_MAPPING)

        const expected = 7 as Step<{integer: true}>
        expect(actual).toBe(expected)
    })

    it("throws an error if the pev is longer than the mapping, i.e. if it does not have a mapping for every prime exponent in the pev", (): void => {
        const pev = [2, 1, -1, -3, 1, 1] as Pev
        const mapping = [12, 19, 28] as Mapping

        expect((): void => {
            computePevMapping(pev, mapping)
        }).toThrowError("Please provide a mapping with a prime limit at least as high as the pev it is mapping. This mapping ⟨  12  19  28 ] could not map pev [   2   1  -1  -3   1   1 ⟩.")
    })
})
