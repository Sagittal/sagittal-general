import {
    camelCaseToConstantCase,
    camelCaseToLowerCase,
    camelCaseToUpperCase,
    constantCaseToUpperCase,
} from "../../../src/code/case"

describe("case", (): void => {
    it("camel case to constant case", (): void => {
        expect(camelCaseToConstantCase("whatsUpDoc"))
            .toBe("WHATS_UP_DOC")
    })

    it("camel case to lower case", (): void => {
        expect(camelCaseToLowerCase("whatsUpDoc"))
            .toBe("whats up doc")
    })

    it("constant case to upper case", (): void => {
        expect(constantCaseToUpperCase("WHATS_UP_DOC"))
            .toBe("Whats Up Doc")
    })

    it("camel case to upper case", (): void => {
        expect(camelCaseToUpperCase("whatsUpDoc"))
            .toBe("Whats Up Doc")
    })
})
