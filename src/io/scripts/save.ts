import {colorize} from "../colorize"
import {ioSettings} from "../globals"
import {Io} from "../types"
import {targetColors} from "./colors"
import {LogTarget} from "./types"
import {write} from "./write"

const saveLog = (message: Io, target: LogTarget = LogTarget.ALL): void => {
    if (ioSettings.logTargets[LogTarget.NONE]) {
        return
    }

    if (ioSettings.logTargets[LogTarget.ALL] || ioSettings.logTargets[target] || target === LogTarget.ALL) {
        write(message, target, ioSettings.logDir)

        // tslint:disable-next-line:no-console
        console.log(colorize(message, targetColors[target]))
    }
}

export {
    saveLog,
}
