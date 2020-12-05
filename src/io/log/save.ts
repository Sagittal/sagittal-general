import {colorize} from "../colorize"
import {ioSettings} from "../globals"
import {Io} from "../types"
import {targetColors} from "./colors"
import {LogTarget, SaveLogOptions} from "./types"
import {write} from "./write"

const saveLog = (message: Io, target: LogTarget = LogTarget.ALL, options: SaveLogOptions = {}): void => {
    const {useTargetColor = true, filenameOverride, writeOnly = false} = options

    if (ioSettings.logTargets[LogTarget.NONE]) {
        return
    }

    if (ioSettings.logTargets[LogTarget.ALL] || ioSettings.logTargets[target] || target === LogTarget.ALL) {
        if (!ioSettings.noWrite) {
            write(message, target, ioSettings.scriptGroup, filenameOverride)
        }

        if (!writeOnly) {
            const color = targetColors[target]
            // tslint:disable-next-line:no-console
            console.log(useTargetColor ? colorize(message, color) : message)
        }
    }
}

export {
    saveLog,
}
