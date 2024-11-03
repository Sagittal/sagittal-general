import { isCloseTo, MAX_JS_PRECISION, Precision } from "../../../src"

describe("isCloseTo", (): void => {
    it("returns true if the two values are very close", (): void => {
        const valueA = 5.68598945
        const valueB = 5.68598948

        const actual = isCloseTo(valueA, valueB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the two values are not very close", (): void => {
        const valueA = 5.68598945
        const valueB = 5.68597945

        const actual = isCloseTo(valueA, valueB)

        expect(actual).toBeFalsy()
    })

    it("an example of values which shouldn't be considered close by default precision, but are", (): void => {
        const valueA = 1.0144785195688801
        const valueB = 1.0144775390625

        const actual = isCloseTo(valueA, valueB)

        expect(actual).toBeTruthy()
        // You need to move precision up to 6 for this to be false.
        // We thought it was at 6, but my implementation of isCloseTo was off by 1.
        // It was actually 5 all along. I'd like to get us up to 6, but that causes dozens of tests to fail, because
        // I'd been building upon a faulty tolerance of accuracy this whole time.
    })

    it("accepts an accuracy threshold argument", (): void => {
        const valueA = 5.6862
        const valueB = 5.6858
        const precision = 3 as Precision

        const actual = isCloseTo(valueA, valueB, precision)

        expect(actual).toBeTruthy()
    })

    it("when given the max precision, returns true if the values are equal", (): void => {
        const valueA = 5.6862686268626862656265626562656265626562656265
        const valueB = 5.6862686268626862656265626562656265626562656265
        const precision = MAX_JS_PRECISION

        const actual = isCloseTo(valueA, valueB, precision)

        expect(actual).toBeTruthy()
    })

    it("when given the max precision, returns false if the values are not equal, within the ability for JavaScript to discern", (): void => {
        const valueA = 5.686268697656264
        const valueB = 5.686268697656265
        const precision = MAX_JS_PRECISION

        const actual = isCloseTo(valueA, valueB, precision)

        expect(actual).toBeFalsy()
    })

    it("when given the max precision, returns true even if the values aren't equal, if they are beyond max javascript precision", (): void => {
        const valueA = 5.6862686971656264
        const valueB = 5.6862686971656265
        const precision = MAX_JS_PRECISION

        const actual = isCloseTo(valueA, valueB, precision)

        expect(actual).toBeTruthy()
    })

    it("works when both values are undefined", (): void => {
        const valueA = undefined
        const valueB = undefined

        const actual = isCloseTo(valueA, valueB)

        expect(actual).toBeTruthy()
    })

    it("works when one value is undefined", (): void => {
        const valueA = undefined
        const valueB = 4

        const actual = isCloseTo(valueA, valueB)

        expect(actual).toBeFalsy()
    })

    it("works when the other value is undefined", (): void => {
        const valueA = 8
        const valueB = undefined

        const actual = isCloseTo(valueA, valueB)

        expect(actual).toBeFalsy()
    })
})
