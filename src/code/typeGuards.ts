const isNumber = (candidateNumber: unknown): candidateNumber is number =>
    typeof candidateNumber === "number" && !isNaN(candidateNumber)

const isString = (candidateString: unknown): candidateString is string =>
    typeof candidateString === "string"

const isUndefined = (candidateUndefined: unknown): candidateUndefined is undefined =>
    typeof candidateUndefined === "undefined"

const isObject = (candidateObject: unknown): candidateObject is Object =>
    typeof candidateObject === "object"

const isArray = (candidateArray: unknown): candidateArray is unknown[] =>
    candidateArray instanceof Array

const isBoolean = (candidateBoolean: unknown): candidateBoolean is boolean =>
    candidateBoolean === true || candidateBoolean === false

export {
    isNumber,
    isString,
    isUndefined,
    isArray,
    isObject,
    isBoolean,
}
