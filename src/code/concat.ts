const concat = <T extends string | unknown[]>(baseArray: T, concatenatedArray: T): T => {
    return baseArray.concat(concatenatedArray as string & unknown[]) as T
}

export {
    concat,
}
