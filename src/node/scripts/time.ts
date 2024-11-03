import { performance } from "perf_hooks"
import { Formatted, formatTime } from "../../io"
import { subtract } from "../../math"
import { Ms } from "../../types"
import { scriptSettings } from "./globals"

const now = (): Ms => {
    return performance.now() as Ms
}

const time = (): Formatted<Ms> => {
    return formatTime(subtract(now(), scriptSettings.time as Ms))
}

export { now, time }
