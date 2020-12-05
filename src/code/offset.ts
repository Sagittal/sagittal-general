import {Offset} from "../types"

const offset = <T extends number>(value: T, offset: Offset<T>): T =>
    value + offset as T

export {
    offset,
}
