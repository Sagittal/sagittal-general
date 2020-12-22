import {finalElement} from "../code"
import {BLANK} from "./constants"
import {Char} from "./types"

const finalChar = (text: string): Char =>
    finalElement(text.split(BLANK)) as Char

export {
    finalChar,
}
