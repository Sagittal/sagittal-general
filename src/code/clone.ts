const deepClone = <T extends unknown>(object: T): T =>
    object ? JSON.parse(JSON.stringify(object)) : object

const shallowClone = <T extends Object | unknown[] | string>(object: T): T =>
    (object as unknown[]).length === undefined ?
        {...(object as Object)} as T :
        (object as unknown[]).slice(0) as T

export {
    shallowClone,
    deepClone,
}
