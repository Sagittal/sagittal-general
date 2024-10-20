import {
    mapPev,
    computeSimpleMap,
    Ed,
    Max,
    Pev,
    OCTAVE_WINDOW,
    Prime,
    Step,
    Map,
    Window,
} from "../../../../../src"

describe("mapPev", (): void => {
    const INSANE_ZETA_PEAK_MAP: Map<{ integer: true }> = computeSimpleMap({
        ed: 8539.00834 as Ed<{ of: Window<{ of: 2 }> }>,
        window: OCTAVE_WINDOW,
        primeLimit: 281 as Max<Prime>,
    })

    it("given a map, returns the number of steps that would represent the given pev", (): void => {
        const map = [8539, 13534, 19827, 23972, 29540, 31598] as Map<{
            integer: true
        }>
        const pev = [5, -3, 1, -1, -1, 1] as Pev

        const actual = mapPev(pev, map)

        const expected = 6 as Step<{ integer: true }>
        expect(actual).toBe(expected)
    })

    it("checkin' 77/185n maps to 0 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const pev = [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Pev

        const actual = mapPev(pev, INSANE_ZETA_PEAK_MAP)

        const expected = 0 as Step<{ integer: true }>
        expect(actual).toBe(expected)
    })

    it("maps 143/1715n to 7 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const pev = [2, 1, -1, -3, 1, 1] as Pev

        const actual = mapPev(pev, INSANE_ZETA_PEAK_MAP)

        const expected = 7 as Step<{ integer: true }>
        expect(actual).toBe(expected)
    })

    it("throws an error if the pev is longer than the map, i.e. if it does not have a map for every prime exponent in the pev", (): void => {
        const pev = [2, 1, -1, -3, 1, 1] as Pev
        const map = [12, 19, 28] as Map

        expect((): void => {
            mapPev(pev, map)
        }).toThrowError(
            "Please provide a map with a prime limit at least as high as the pev it is mapping. This map ⟨  12  19  28 ] could not map pev [   2   1  -1  -3   1   1 ⟩.",
        )
    })
})
