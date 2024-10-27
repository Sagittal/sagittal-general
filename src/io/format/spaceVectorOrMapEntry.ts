import { Io } from "../types"

const spaceVectorOrMapEntry = (entry: number): Io => {
    let entryText = entry.toString()
    while (entryText.length < 3) {
        entryText = " " + entryText
    }

    return entryText as Io
}

export { spaceVectorOrMapEntry }