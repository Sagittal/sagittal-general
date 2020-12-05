import {Decimal, doForEachRationalMonzo, Exponent, Extrema, Maybe, Monzo, Prime, stringify} from "../../../../../src"

describe("doForEachRationalMonzo", (): void => {
    const primeExponentExtremas = [
        [-2, 1],
        [0, 1],
        [-1, 0],
    ] as Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>>
    const arg1 = "here I am"
    const arg2 = "here I am 2"

    it("calls the work function once for each possible monzo given the prime exponent extremas", (): void => {
        const workFunction = jasmine.createSpy()

        doForEachRationalMonzo(primeExponentExtremas, workFunction, arg1, arg2)

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
        const workFunction = (monzo: Monzo<{rational: true}>): Maybe<string> =>
            monzo[0] === -1 ? stringify(monzo) : undefined

        const actual = doForEachRationalMonzo(primeExponentExtremas, workFunction)

        const expected = [
            "[-1,0,-1]",
            "[-1,1,-1]",
            "[-1]",
            "[-1,1]",
        ]
        expect(actual).toEqual(expected)
    })
})
