import {now} from "../code"
import {subtract} from "../math"
import {Ms} from "../types"
import {Formatted, formatTime} from "./format"
import {ioSettings} from "./globals"

const time = (): Formatted<Ms> => {
    return formatTime(subtract(now() as Ms, ioSettings.time as Ms))
}

export {
    time,
}
