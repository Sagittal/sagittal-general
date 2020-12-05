import {shallowClone} from "./clone"
import {ARRAY_EXTENSION_BASE, OBJECT_EXTENSION_BASE} from "./constants"
import {ExtensionBaseType} from "./types"

const computeExtensionBase = (extensionBaseType: ExtensionBaseType): unknown[] | Object => {
    return extensionBaseType === ExtensionBaseType.ARRAY ?
        shallowClone(ARRAY_EXTENSION_BASE) :
        shallowClone(OBJECT_EXTENSION_BASE)
}

export {
    computeExtensionBase,
}
