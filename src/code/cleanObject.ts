import { KeyValObj } from "./types"

const cleanObject = <T extends KeyValObj>(object: T): void => {
    for (const variableKey in object) {
        if (object.hasOwnProperty(variableKey)) {
            delete object[variableKey]
        }
    }
}

export { cleanObject }
