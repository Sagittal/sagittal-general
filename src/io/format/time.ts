import { floor, mod, round } from "../../math"
import { Ms } from "../../types"
import { Formatted, TimePrecision } from "./types"

const formatTime = (ms: Ms, timePrecision: TimePrecision = TimePrecision.MS): Formatted<Ms> => {
    const rawMilliseconds = mod(ms, 1000 as Ms)
    const milliseconds = timePrecision > TimePrecision.MS ? floor(rawMilliseconds) : round(rawMilliseconds)

    const rawSeconds = mod((ms / 1000) as Ms, 60 as Ms)
    const seconds = timePrecision > TimePrecision.S ? floor(rawSeconds) : round(rawSeconds)

    const rawMinutes = mod((ms / (1000 * 60)) as Ms, 60 as Ms)
    const minutes = timePrecision > TimePrecision.M ? floor(rawMinutes) : round(rawMinutes)

    const rawHours = mod((ms / (1000 * 60 * 60)) as Ms, 24 as Ms)
    const hours = timePrecision > TimePrecision.H ? floor(rawHours) : round(rawHours)

    const rawDays = mod((ms / (1000 * 60 * 60 * 24)) as Ms, 365.25 as Ms)
    const days = timePrecision > TimePrecision.D ? floor(rawDays) : round(rawDays)

    const parts = []

    if (days > 0) parts.push(`${days}d`)
    if (timePrecision >= TimePrecision.H && (hours > 0 || days > 0)) parts.push(`${hours}h`)
    if (timePrecision >= TimePrecision.M && (minutes > 0 || hours > 0 || days > 0)) parts.push(`${minutes}m`)
    if (timePrecision >= TimePrecision.S && (seconds > 0 || minutes > 0 || hours > 0 || days > 0))
        parts.push(`${seconds}s`)
    if (timePrecision >= TimePrecision.MS) parts.push(`${milliseconds}ms`)

    return parts.join(", ") as Formatted<Ms>
}

export { formatTime }
