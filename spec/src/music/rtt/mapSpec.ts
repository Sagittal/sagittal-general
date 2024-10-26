import { mapVector, Vector, Map, Count, Max, Prime, computeSimpleMap } from "../../../../src"
import { Generator } from "../../../../src/music/rtt/types"
import { Edo } from "../../../../src/music/types"

describe("mapVector", (): void => {
    it("given a map, returns the number of steps that would represent the given vector", (): void => {
        const map = [8539, 13534, 19827, 23972, 29540, 31598] as Map
        const vector = [5, -3, 1, -1, -1, 1] as Vector

        const actual = mapVector(vector, map)

        const expected = 6 as Count<Generator>
        expect(actual).toBe(expected)
    })

    it("throws an error if the vector is longer than the map, i.e. if it does not have a entry for every entry in the vector", (): void => {
        const vector = [2, 1, -1, -3, 1, 1] as Vector
        const map = [12, 19, 28] as Map

        expect((): void => {
            mapVector(vector, map)
        }).toThrowError(
            "Please provide a map with at least the geneartors/primes entries for the primes of the vector it is mapping. This map ⟨  12  19  28 ] could not map vector [   2   1  -1  -3   1   1 ⟩.",
        )
    })

    describe("zeta peak simple map", () => {
        const INSANE_ZETA_PEAK_MAP: Map = computeSimpleMap({
            edo: 8539.00834 as Edo,
            primeLimit: 281 as Max<Max<Prime>>,
        })

        it("checkin' 77/185n maps to 0 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
            const vector = [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Vector

            const actual = mapVector(vector, INSANE_ZETA_PEAK_MAP)

            const expected = 0 as Count<Generator>
            expect(actual).toBe(expected)
        })

        it("maps 143/1715n to 7 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
            const vector = [2, 1, -1, -3, 1, 1] as Vector

            const actual = mapVector(vector, INSANE_ZETA_PEAK_MAP)

            const expected = 7 as Count<Generator>
            expect(actual).toBe(expected)
        })
    })
})
