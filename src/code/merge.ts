const merge = <T>(...objects: T[]): T =>
    objects.reduce(
        (mergedObjects: T, object: T): T =>
            ({...mergedObjects, ...object}),
        {} as T,
    )

export {
    merge,
}
