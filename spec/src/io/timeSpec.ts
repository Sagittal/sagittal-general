import {formatTime, Ms, TimePrecision} from "../../../src"

describe("formatTime", (): void => {
    it("formats ms", (): void => {
        const ms = 205207663.470801 as Ms

        const actual = formatTime(ms)

        const expected = "2d, 9h, 0m, 7s, 663ms"
        expect(actual).toEqual(expected)
    })

    it("works for small times", (): void => {
        const ms = 13801.802698 as Ms

        const actual = formatTime(ms)

        const expected = "13s, 802ms"
        expect(actual).toEqual(expected)
    })

    it("displays 0ms for very very small times", (): void => {
        const ms = 0.138018 as Ms

        const actual = formatTime(ms)

        const expected = "0ms"
        expect(actual).toEqual(expected)
    })

    it("can accept a time unit precision, rounding up", (): void => {
        const ms = 13801.802698 as Ms

        const actual = formatTime(ms, TimePrecision.S)

        const expected = "14s"
        expect(actual).toEqual(expected)
    })

    it("can accept a time unit precision, rounding down", (): void => {
        const ms = 205207663.470801 as Ms

        const actual = formatTime(ms, TimePrecision.D)

        const expected = "2d"
        expect(actual).toEqual(expected)
    })
})
