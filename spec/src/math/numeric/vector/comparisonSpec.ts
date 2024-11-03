import { areVectorsEqual, Vector } from "../../../../../src"

describe("areVectorsEqual", (): void => {
    it("returns true if the vectors are equal", (): void => {
        const vectorA: Vector = [5, 4] as Vector
        const vectorB: Vector = [5, 4] as Vector

        const actual = areVectorsEqual(vectorA, vectorB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the vectors are not equal", (): void => {
        const vectorA: Vector = [5, 4] as Vector
        const vectorB: Vector = [5, 0, 4] as Vector

        const actual = areVectorsEqual(vectorA, vectorB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the vectors are equal, trimming them if necessary", (): void => {
        const vectorA: Vector = [5, 4, 0] as Vector
        const vectorB: Vector = [5, 4] as Vector

        const actual = areVectorsEqual(vectorA, vectorB)

        expect(actual).toBeTruthy()
    })
})
