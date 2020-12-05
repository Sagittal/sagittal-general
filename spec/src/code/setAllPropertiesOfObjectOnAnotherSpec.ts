import {Maybe} from "../../../src"
import {setAllPropertiesOfObjectOnAnother} from "../../../src/code/setAllPropertiesOfObjectOnAnother"

describe("setAllPropertiesOfObjectOnAnother", (): void => {
    it("sets all the properties of one object onto another (handy when you need to make an object so, but you do not have access to reassign it, such as when it lives at the top level in another module, like a globals module", (): void => {
        const objectWithProperties: {a: number, c: number} = {a: 4, c: 5}
        const objectToChange: {a: number, b: number} = {a: 1, b: 3}

        setAllPropertiesOfObjectOnAnother({objectWithProperties, objectToChange})

        const expected: {a: number, b: number, c: number} = {a: 4, b: 3, c: 5}
        expect(objectToChange).toEqual(expected)
    })

    it("works even when one of the values is undefined", (): void => {
        const objectWithProperties: {a: Maybe<number>, c: number} = {a: undefined, c: 5}
        const objectToChange: {a: number, b: number} = {a: 1, b: 3}

        setAllPropertiesOfObjectOnAnother({objectWithProperties, objectToChange})

        const expected: {a: Maybe<number>, b: number, c: number} = {a: undefined, b: 3, c: 5}
        expect(objectToChange as {a: Maybe<number>, b: number, c: number}).toEqual(expected)
    })
})
