import {Io} from "../../io"
import {colorize} from "../colorize"
import {targetColors} from "./colors"
import {scriptSettings} from "./globals"
import {LogTarget} from "./types"
import {write} from "./write"

const saveLog = (message: Io, target: LogTarget = LogTarget.ALL): void => {
    if (scriptSettings.logTargets[LogTarget.NONE]) {
        return
    }

    if (scriptSettings.logTargets[LogTarget.ALL] || scriptSettings.logTargets[target] || target === LogTarget.ALL) {
        write(message, target, scriptSettings.logDir)

        console.log(colorize(message, targetColors[target]))
    }
}

export {
    saveLog,
}
