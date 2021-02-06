import {
    camelCaseToConstantCase,
    camelCaseToKebabCase,
    camelCaseToLowerCase,
    camelCaseToUpperCase,
    constantCaseToUpperCase,
    lowerCaseToSentenceCase, sentenceCaseToKebabCase,
} from "../../../src/code/case"

describe("case", (): void => {
    it("camel case to constant case", (): void => {
        expect(camelCaseToConstantCase("whatsUpDoc12Carrots"))
            .toBe("WHATS_UP_DOC_12_CARROTS")
    })

    it("camel case to lower case", (): void => {
        expect(camelCaseToLowerCase("whatsUpDoc12Carrots"))
            .toBe("whats up doc 12 carrots")
    })

    it("constant case to upper case", (): void => {
        expect(constantCaseToUpperCase("WHATS_UP_DOC_12_CARROTS"))
            .toBe("Whats Up Doc 12 Carrots")
    })

    it("camel case to upper case", (): void => {
        expect(camelCaseToUpperCase("whatsUpDoc12Carrots"))
            .toBe("Whats Up Doc 12 Carrots")
    })

    it("lower case to sentence case", (): void => {
        expect(lowerCaseToSentenceCase("whats up doc 12 carrots"))
            .toBe("Whats up doc 12 carrots")
    })

    it("camel case to kebab case", (): void => {
        expect(camelCaseToKebabCase("whatsUpDoc12Carrots"))
            .toBe("whats-up-doc-12-carrots")
    })

    it("sentence case to kebab case", (): void => {
        expect(sentenceCaseToKebabCase("Whats up doc 12 carrots"))
            .toBe("whats-up-doc-12-carrots")
    })
})
