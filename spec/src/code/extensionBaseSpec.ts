import {computeExtensionBase, ExtensionBaseType} from "../../../src"

describe("computeExtensionBase", (): void => {
    it("returns an empty array when array is asked for", (): void => {
        const extensionBaseType = ExtensionBaseType.ARRAY

        const actual = computeExtensionBase(extensionBaseType)

        const expected: unknown[] = []
        expect(actual).toEqual(expected)
    })

    it("returns an empty object when object is asked for", (): void => {
        const extensionBaseType = ExtensionBaseType.OBJECT

        const actual = computeExtensionBase(extensionBaseType)

        const expected: Object = {}
        expect(actual).toEqual(expected)
    })

    it("does not return the same array each time", (): void => {
        const extensionBaseType = ExtensionBaseType.ARRAY

        const previousActual: unknown[] = computeExtensionBase(extensionBaseType) as unknown[]
        previousActual.push(3)

        const actual = computeExtensionBase(extensionBaseType)

        const expected: unknown[] = []
        expect(actual).toEqual(expected)
    })

    it("returns an empty object when object is asked for", (): void => {
        const extensionBaseType = ExtensionBaseType.OBJECT

        const previousActual: {key: number} = computeExtensionBase(extensionBaseType) as {key: number}
        previousActual.key = 3

        const actual = computeExtensionBase(extensionBaseType)

        const expected: Object = {}
        expect(actual).toEqual(expected)
    })
})
