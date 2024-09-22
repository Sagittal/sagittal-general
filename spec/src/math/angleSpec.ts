import { computeAngle } from "../../../src"
import { PI } from "../../../src/math/constants"
import { Coordinates, Radians } from "../../../src/math/types"

describe("computeAngle", (): void => {
    it("works for a horizontal line", (): void => {
        const origin = [0, 0] as Coordinates
        const point = [5, 0] as Coordinates

        const actual = computeAngle(origin, point)

        const expected = 0 as Radians
        expect(actual).toBe(expected)
    })

    it("works for a vertical line", (): void => {
        const origin = [0, 0] as Coordinates
        const point = [0, 5] as Coordinates

        const actual = computeAngle(origin, point)

        const expected = (PI / 2) as Radians
        expect(actual).toBe(expected)
    })
})
