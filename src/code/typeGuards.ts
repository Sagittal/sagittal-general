const isNumber = (candidateNumber: unknown): candidateNumber is number =>
    typeof candidateNumber === "number" && !isNaN(candidateNumber)

const isString = (candidateString: unknown): candidateString is string => typeof candidateString === "string"

const isUndefined = (candidateUndefined: unknown): candidateUndefined is undefined =>
    typeof candidateUndefined === "undefined" || candidateUndefined === undefined

const isNull = (candidateUndefined: unknown): candidateUndefined is null => candidateUndefined === null

const isObject = (candidateObject: unknown): candidateObject is object => typeof candidateObject === "object"

const isArray = (candidateArray: unknown): candidateArray is unknown[] => candidateArray instanceof Array

const isBoolean = (candidateBoolean: unknown): candidateBoolean is boolean =>
    candidateBoolean === true || candidateBoolean === false

export { isNumber, isString, isUndefined, isArray, isObject, isBoolean, isNull }
