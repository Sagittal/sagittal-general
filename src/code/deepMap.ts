import {isArray, isNumber, isObject} from "./typeGuards"

const deepMap: {
    <T, U, V extends string | number | symbol>(
        value: Record<V, T>,
        fn: (value: T, ...args: any[]) => U,
        ...args: any[]
    ): Record<V, U>,
    <T, U>(value: T[], fn: (value: T, ...args: any[]) => U, ...args: any[]): U[],
    <T, U>(value: T, fn: (value: T, ...args: any[]) => U, ...args: any[]): U,
    (value: unknown, fn: (value: unknown, ...args: any[]) => unknown, ...args: any[]): unknown,
} = <T, U>(value: T, fn: (value: T, ...args: any[]) => U, ...args: any[]): any => {
    if (isNumber(value)) {
        return fn(value, ...args)
    } else if (isArray(value)) {
        return (value as T[]).map((element: T): T => deepMap(element, fn, ...args) as unknown as T) as unknown as T
    } else if (isObject(value)) {
        return (Object.entries(value) as Array<[string, T]>).reduce(
            (object: T, [key, value]: [string, T]): T => {
                return {
                    ...object,
                    [key]: deepMap(value, fn, ...args),
                }
            },
            {} as T,
        ) as unknown as T
    } else {
        return value
    }
}

export {
    deepMap,
}
