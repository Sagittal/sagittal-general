import { computeSimpleMap, Max, Prime, Map, Edo } from "../../../../src"

describe("computeSimpleMap", (): void => {
    it("given an EDO and a prime limit, returns the simple map", (): void => {
        const edo: Edo = 12 as Edo
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeSimpleMap(edo, primeLimit)

        const expected = [12, 19, 28] as Map
        expect(actual).toEqual(expected)
    })

    it("another example", (): void => {
        const edo: Edo = 11 as Edo
        const primeLimit: Max<Prime> = 7 as Max<Prime>

        const actual: Map = computeSimpleMap(edo, primeLimit)

        const expected = [11, 17, 26, 31] as Map
        expect(actual).toEqual(expected)
    })
})
