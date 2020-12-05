import {
    computeMonzoMapping,
    computePatentVal,
    Ed,
    Max,
    Monzo,
    OCTAVE_WINDOW,
    Prime,
    Step,
    Val,
    Window,
} from "../../../../../src"

describe("computeMonzoMapping", (): void => {
    const INSANE_ZETA_PEAK_VAL: Val<{integer: true}> =
        computePatentVal({
            ed: 8539.00834 as Ed<{of: Window<{of: 2}>}>,
            window: OCTAVE_WINDOW,
            primeLimit: 281 as Max<Prime>,
        })

    it("given a val mapping, returns the number of steps that would represent the given monzo", (): void => {
        const val = [8539, 13534, 19827, 23972, 29540, 31598] as Val<{integer: true}>
        const monzo = [5, -3, 1, -1, -1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, val)

        const expected = 6 as Step<{integer: true}>
        expect(actual).toBe(expected)
    })

    it("checkin' 77/185n maps to 0 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const monzo = [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Monzo

        const actual = computeMonzoMapping(monzo, INSANE_ZETA_PEAK_VAL)

        const expected = 0 as Step<{integer: true}>
        expect(actual).toBe(expected)
    })

    it("maps 143/1715n to 7 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const monzo = [2, 1, -1, -3, 1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, INSANE_ZETA_PEAK_VAL)

        const expected = 7 as Step<{integer: true}>
        expect(actual).toBe(expected)
    })

    it("throws an error if the monzo is longer than the val, i.e. if it does not have a mapping for every prime exponent in the monzo", (): void => {
        const monzo = [2, 1, -1, -3, 1, 1] as Monzo
        const val = [12, 19, 28] as Val

        expect((): void => {
            computeMonzoMapping(monzo, val)
        }).toThrowError("Please provide a val with a prime limit at least as high as the monzo it is mapping. This val ⟨  12  19  28 ] could not map monzo [   2   1  -1  -3   1   1 ⟩.")
    })
})
