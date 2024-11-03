const camelCaseToLowerCase = (str: string): string =>
    str
        .replace(/([a-z\xE0-\xFF0-9])([A-Z\xC0\xDF])/g, "$1 $2")
        .replace(/([a-z\xE0-\xFF])([0-9])/g, "$1 $2")
        .toLowerCase()

const camelCaseToConstantCase = (str: string): string =>
    str
        .replace(/([a-z\xE0-\xFF0-9])([A-Z\xC0\xDF])/g, "$1_$2")
        .replace(/([a-z\xE0-\xFF])([0-9])/g, "$1_$2")
        .toUpperCase()

const constantCaseToUpperCase = (str: string): string => {
    const almost: string = str
        .toLowerCase()
        .replace(/(_\w)/g, (match: string): string => ` ${match[1].toUpperCase()}`)

    return almost.charAt(0).toUpperCase() + almost.slice(1)
}

const camelCaseToUpperCase = (str: string): string => constantCaseToUpperCase(camelCaseToConstantCase(str))

const lowerCaseToSentenceCase = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const camelCaseToKebabCase = (str: string): string =>
    str
        .replace(/([a-z\xE0-\xFF0-9])([A-Z\xC0\xDF])/g, "$1-$2")
        .replace(/([a-z\xE0-\xFF])([0-9])/g, "$1-$2")
        .toLowerCase()

const sentenceCaseToKebabCase = (str: string): string => str.replace(/\s/g, "-").toLowerCase()

export {
    camelCaseToConstantCase,
    camelCaseToLowerCase,
    camelCaseToUpperCase,
    constantCaseToUpperCase,
    lowerCaseToSentenceCase,
    sentenceCaseToKebabCase,
    camelCaseToKebabCase,
}
