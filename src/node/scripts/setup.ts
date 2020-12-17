import "colors"
import {program} from "commander"
import {isUndefined} from "../../code"
import {COMMA, ioSettings} from "../../io"
import {Filename} from "../types"
import {clearLogFiles} from "./clear"
import {scriptSettings} from "./globals"
import {setLogTargets} from "./set"
import {now} from "./time"
import {LogTarget, ScriptFlag} from "./types"

const setupScriptAndIo = (logDir?: Filename, defaultLogTargets?: LogTarget[]): void => {
    if (!isUndefined(logDir)) scriptSettings.logDir = logDir

    program
        .option(`-${ScriptFlag.LOG_TARGETS}, --log-targets [logTargets]`, "log targets")
        .option(`-${ScriptFlag.NO_COLOR}, --no-color`, "no color")
        .option(`-${ScriptFlag.TABLE_FORMAT}, --table-format <tableFormat>`, "table format")
        .option(`-${ScriptFlag.NO_TIME}, --no-time`, "no time")

    program.parse(process?.argv)

    if (!isUndefined(logDir)) clearLogFiles(logDir)

    if (!isUndefined(program.tableFormat)) ioSettings.tableFormat = program.tableFormat

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(COMMA))

    const testMode = process?.env?.TEST_MODE
    scriptSettings.disableColors = !program.color || !!testMode

    if (program.time && !testMode) {
        scriptSettings.time = now()
    }
}

export {
    setupScriptAndIo,
}
