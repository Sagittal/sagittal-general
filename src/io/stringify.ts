const stringify = (object: unknown, {multiline = false}: {multiline?: boolean} = {}): string => {
    return multiline ? JSON.stringify(object, undefined, 4) : JSON.stringify(object)
}

export {
    stringify,
}
