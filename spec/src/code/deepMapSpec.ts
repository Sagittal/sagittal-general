import { deepMap, DEFAULT_PRECISION, round } from "../../../src"
import { KeyValObj } from "../../../src/code/types"

describe("deepMap", (): void => {
    it("calls the function on all leaves of the object and/or array structure", (): void => {
        const object = {
            prop: 1.4948594954,
            arr: [
                1.1247329857279,
                { a: 6.656348989346, b: [34343.34343435565, 9.54545454] },
                [8.8347358378535],
            ],
            obj: { a: 7.4574948959454, b: [5.434234423432423, 4.4538683499, [343.53253524643]] },
        } as unknown as KeyValObj<number>

        const actual = deepMap(object, round, DEFAULT_PRECISION)

        const expected = {
            prop: 1.49486,
            arr: [1.12473, { a: 6.65635, b: [34343.34343, 9.54545] }, [8.83474]],
            obj: { a: 7.45749, b: [5.43423, 4.45387, [343.53254]] },
        } as unknown as KeyValObj<number>
        expect(actual).toEqual(expected)
    })

    it("works for primitives", (): void => {
        const number = 3.456363463463

        const actual = deepMap(number, round, DEFAULT_PRECISION)

        const expected = 3.45636
        expect(actual).toEqual(expected)
    })

    it("works for arrays", (): void => {
        const array = [
            1.1247329857279,
            { a: 6.656348989346, b: [34343.34343435565, 9.54545454] },
            [8.8347358378535],
        ] as number[]

        const actual = deepMap(array, round, DEFAULT_PRECISION)

        const expected = [1.12473, { a: 6.65635, b: [34343.34343, 9.54545] }, [8.83474]] as number[]
        expect(actual).toEqual(expected)
    })
})
