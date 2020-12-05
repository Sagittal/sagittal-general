const cleanObject = <T extends Record<string, unknown>>(object: T): void => {
    for (const variableKey in object) {
        if (object.hasOwnProperty(variableKey)) {
            delete object[variableKey]
        }
    }
}

export {
    cleanObject,
}
