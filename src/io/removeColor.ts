import {BLANK} from "./constants"
import {Io} from "./types"

const removeColor = (io: Io): Io => {
    return io.replace(/\x1B\[\d+m/g, BLANK) as Io
}

export {
    removeColor,
}
