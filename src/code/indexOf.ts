import { Index } from "../types"

const indexOf = <T extends string | number>(array: T[], element: T): Index<T> => array.indexOf(element) as Index<T>

export { indexOf }
