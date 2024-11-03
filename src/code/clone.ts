const deepClone = <T>(object: T): T => (object ? structuredClone(object) : object)

const shallowClone = <T extends object | unknown[] | string>(object: T): T =>
    (object as unknown[]).length === undefined
        ? ({ ...(object as object) } as T)
        : ((object as unknown[]).slice(0) as T)

export { shallowClone, deepClone }
