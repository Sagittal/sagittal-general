import { isArray, isNumber, isObject } from "./typeGuards"

const deepMap: {
    <T, U, V extends string | number, W>(
        value: Record<V, T>,
        fn: (value: T, ...args: W[]) => U,
        ...args: W[]
    ): Record<V, U>
    <T, U, W>(value: T[], fn: (value: T, ...args: W[]) => U, ...args: W[]): U[]
    <T, U, W>(value: T, fn: (value: T, ...args: W[]) => U, ...args: W[]): U
    <W>(value: W, fn: (value: W, ...args: W[]) => W, ...args: W[]): W
} = <T, U, V extends string | number, W>(
    value: Record<V, T> | T[] | T,
    fn: (value: T, ...args: W[]) => U,
    ...args: W[]
): Record<V, U> | U[] | U => {
    if (isNumber(value)) {
        return fn(value, ...args)
    } else if (isArray(value)) {
        return value.map(
            (element: T): T => deepMap(element, fn, ...args) as unknown as T,
        ) as W as unknown as U
    } else if (isObject(value)) {
        return (Object.entries(value) as [V, T][]).reduce(
            (object: Record<V, U>, [key, value]: [V, T]): Record<V, U> => {
                return {
                    ...object,
                    [key]: deepMap(value, fn, ...args),
                }
            },
            {} as Record<V, U>,
        )
    } else {
        return value as unknown as U
    }
}

export { deepMap }
