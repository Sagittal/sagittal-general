import { Maybe } from "../../code"
import { BLANK } from "../../io"
import { scriptSettings } from "./globals"
import { LogTarget, LogTargets } from "./types"

const setLogTargets = (logTargetsCommaSeparatedString: Maybe<string | boolean> = BLANK): void => {
    scriptSettings.logTargets = Object.keys(LogTarget).reduce(
        (logTargets: LogTargets, logTarget: string): LogTargets => ({ ...logTargets, [logTarget]: false }),
        {} as LogTargets,
    )

    if (logTargetsCommaSeparatedString === true) {
        scriptSettings.logTargets[LogTarget.ALL] = true
        return
    }

    const targets: LogTarget[] = (logTargetsCommaSeparatedString as string).split(",") as LogTarget[]

    targets.forEach((target: LogTarget): void => {
        scriptSettings.logTargets[target] = true
    })

    scriptSettings.logTargets[LogTarget.FINAL] = true
}

export { setLogTargets }
