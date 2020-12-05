import {computePatentVal, Ed, Max, Prime, Val, Window} from "../../../../../src"

describe("computePatentVal", (): void => {
    it("given an EDO and a prime limit, returns the patent val", (): void => {
        const ed: Ed<{of: Window<{of: 2}>}> = 12 as Ed<{of: Window<{of: 2}>}>
        const primeLimit: Max<Prime> = 5 as Max<Prime>
        const window: Window<{of: 2}> = 2 as Window<{of: 2}>

        const actual: Val = computePatentVal({ed, window, primeLimit})

        const expected = [12, 19, 28] as Val
        expect(actual).toEqual(expected)
    })

    it("another example", (): void => {
        const ed: Ed<{of: Window<{of: 2}>}> = 11 as Ed<{of: Window<{of: 2}>}>
        const primeLimit: Max<Prime> = 7 as Max<Prime>
        const window: Window<{of: 2}> = 2 as Window<{of: 2}>

        const actual: Val = computePatentVal({ed, window, primeLimit})

        const expected = [11, 17, 26, 31] as Val
        expect(actual).toEqual(expected)
    })
})
