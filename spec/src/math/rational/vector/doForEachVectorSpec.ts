import { doForEachRationalVector, Extrema, Maybe, Vector, stringify, PrimeCount } from "../../../../../src"

describe("doForEachRationalVector", (): void => {
    const primeCountExtremas = [
        [-2, 1],
        [0, 1],
        [-1, 0],
    ] as Array<Extrema<{ of: PrimeCount }>>
    const arg1 = "here I am"
    const arg2 = "here I am 2"

    it("calls the work function once for each possible vector given the prime count extremas", (): void => {
        const workFunction = jasmine.createSpy()

        doForEachRationalVector(primeCountExtremas, workFunction, arg1, arg2)

        expect(workFunction).toHaveBeenCalledWith([-2, 0, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-1, 0, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([0, 0, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([1, 0, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-2, 1, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-1, 1, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([0, 1, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([1, 1, -1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-2], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-2, 1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([-1, 1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([0, 1], arg1, arg2)
        expect(workFunction).toHaveBeenCalledWith([1, 1], arg1, arg2)
    })

    it("returns an array of results from the work function", (): void => {
        const workFunction = (vector: Vector): Maybe<string> =>
            vector[0] === -1 ? stringify(vector) : undefined

        const actual = doForEachRationalVector(primeCountExtremas, workFunction)

        const expected = ["[-1,0,-1]", "[-1,1,-1]", "[-1]", "[-1,1]"]
        expect(actual).toEqual(expected)
    })
})
