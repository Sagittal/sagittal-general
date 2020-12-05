const isEmpty = (array: unknown[]): boolean =>
    array.length === 0

const isSingleton = (array: unknown[]): boolean =>
    array.length === 1

export {
    isEmpty,
    isSingleton,
}
