import {now} from "../../code"
import {Formatted, formatTime} from "../../io"
import {subtract} from "../../math"
import {Ms} from "../../types"
import {scriptSettings} from "./globals"

const time = (): Formatted<Ms> => {
    return formatTime(subtract(now() as Ms, scriptSettings.time as Ms))
}

export {
    time,
}
