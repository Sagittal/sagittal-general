import {floor, round} from "../../math"
import {Ms} from "../../types"
import {Formatted, TimePrecision} from "./types"

const formatTime = (ms: Ms, timePrecision: TimePrecision = TimePrecision.MS): Formatted<Ms> => {
    const rawMilliseconds = ms % 1000
    const milliseconds = timePrecision > TimePrecision.MS ? floor(rawMilliseconds) : round(rawMilliseconds)

    const rawSeconds = (ms / 1000) % 60
    const seconds = timePrecision > TimePrecision.S ? floor(rawSeconds) : round(rawSeconds)

    const rawMinutes = (ms / (1000 * 60)) % 60
    const minutes = timePrecision > TimePrecision.M ? floor(rawMinutes) : round(rawMinutes)

    const rawHours = (ms / (1000 * 60 * 60)) % 24
    const hours = timePrecision > TimePrecision.H ? floor(rawHours) : round(rawHours)

    const rawDays = (ms / (1000 * 60 * 60 * 24)) % 365.25
    const days = timePrecision > TimePrecision.D ? floor(rawDays) : round(rawDays)

    const parts = []

    if (days > 0) parts.push(`${days}d`)
    if (timePrecision >= TimePrecision.H && (hours > 0 || days > 0)) parts.push(`${hours}h`)
    if (timePrecision >= TimePrecision.M && (minutes > 0 || hours > 0 || days > 0)) parts.push(`${minutes}m`)
    if (timePrecision >= TimePrecision.S && (seconds > 0 || minutes > 0 || hours > 0 || days > 0)) parts.push(`${seconds}s`)
    if (timePrecision >= TimePrecision.MS) parts.push(`${milliseconds}ms`)

    return parts.join(", ") as Formatted<Ms>
}

export {
    formatTime,
}
