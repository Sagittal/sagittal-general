import { deepClone } from "./clone"
import { isUndefined } from "./typeGuards"
import { KeyValObj, NoProperties } from "./types"

const setAllPropertiesOfObjectOnAnother = ({
    objectToChange,
    objectWithProperties,
}: {
    objectToChange: unknown
    objectWithProperties: unknown
}): void => {
    Object.entries(objectWithProperties as NoProperties).forEach(([key, value]: [string, unknown]): void => {
        ;(objectToChange as KeyValObj)[key] = isUndefined(value) ? value : deepClone(value)
    })
}

export { setAllPropertiesOfObjectOnAnother }
