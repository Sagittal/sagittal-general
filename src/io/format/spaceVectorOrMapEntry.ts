import { stringify } from "../stringify"
import { Io } from "../types"

const spaceVectorOrMapEntry = (entry: number): Io => {
    let entryText = stringify(entry)
    while (entryText.length < 3) {
        entryText = " " + entryText
    }

    return entryText as Io
}

export { spaceVectorOrMapEntry }
