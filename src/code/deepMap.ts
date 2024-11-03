import { isArray, isNumber, isObject } from "./typeGuards"

const deepMap: {
    <T, U, V extends string | number>(
        value: Record<V, T>,
        fn: (value: T, ...args: unknown[]) => U,
        ...args: unknown[]
    ): Record<V, U>
    <T, U>(value: T[], fn: (value: T, ...args: unknown[]) => U, ...args: unknown[]): U[]
    <T, U>(value: T, fn: (value: T, ...args: unknown[]) => U, ...args: unknown[]): U
    (value: unknown, fn: (value: unknown, ...args: unknown[]) => unknown, ...args: unknown[]): unknown
} = <T, U, V extends string | number>(
    value: Record<V, T> | T[] | T,
    fn: (value: T, ...args: unknown[]) => U,
    ...args: unknown[]
): Record<V, U> | U[] | U => {
    if (isNumber(value)) {
        return fn(value, ...args)
    } else if (isArray(value)) {
        return value.map((element: T): T => deepMap(element, fn, ...args) as unknown as T) as unknown as U
    } else if (isObject(value)) {
        return (Object.entries(value) as Array<[V, T]>).reduce(
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
