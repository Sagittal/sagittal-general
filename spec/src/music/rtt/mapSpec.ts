import { computeMap, Max, Prime, Map, Edo, EtName } from "../../../../src"

describe("computeMap", (): void => {
    it("returns the simple map for an unwarted ET name", () => {
        const etName: EtName = "12" as EtName
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [12, 19, 28] as Map
        expect(actual).toEqual(expected)
    })

    it("returns the simple map for an ET name with the explicit 'p' for 'prime'", () => {
        const etName: EtName = "12p" as EtName
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [12, 19, 28] as Map
        expect(actual).toEqual(expected)
    })

    it("works for different ETs and prime limits", () => {
        const etName: EtName = "72" as EtName
        const primeLimit: Max<Prime> = 13 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [72, 114, 167, 202, 249, 266] as Map
        expect(actual).toEqual(expected)
    })

    it("returns the second-best fifth map for an ET name with the 'b' wart, for the second-best prime 3 tuning", () => {
        const etName: EtName = "12b" as EtName
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [12, 20, 28] as Map
        expect(actual).toEqual(expected)
    })

    it("returns the second-best third map for an ET name with the 'c' wart, for the second-best prime 5 tuning", () => {
        const etName: EtName = "12c" as EtName
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [12, 19, 27] as Map
        expect(actual).toEqual(expected)
    })

    it("returns the map with both the second-best prime 3 and second-best prime 5, when given both the 'b' and 'c' warts", () => {
        const etName: EtName = "12bc" as EtName
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [12, 20, 27] as Map
        expect(actual).toEqual(expected)
    })

    it("returns the map with the third-best prime 3 map for an ET name with two 'b' warts", () => {
        const etName: EtName = "12bb" as EtName
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(etName, primeLimit)

        const expected = [12, 18, 28] as Map
        expect(actual).toEqual(expected)
    })

    it("works for EDOs too, in which case it returns their simple map", (): void => {
        const edo: Edo = 12 as Edo
        const primeLimit: Max<Prime> = 5 as Max<Prime>

        const actual: Map = computeMap(edo, primeLimit)

        const expected = [12, 19, 28] as Map
        expect(actual).toEqual(expected)
    })
})
