const computeDeepDistinct = <T>(array: T[]): T[] =>
    Array.from(new Set(array.map((element: T): string => JSON.stringify(element))))
        .map((element: string): T => JSON.parse(element))

export {
    computeDeepDistinct,
}
