import "colors"
import {program} from "commander"
import {isUndefined, now} from "../../code"
import {COMMA} from "../constants"
import {ioSettings} from "../globals"
import {Filename} from "../types"
import {clearLogFiles} from "./clear"
import {setLogTargets} from "./set"
import {LogTarget, ScriptFlag} from "./types"

const setupScriptAndIo = (logDir?: Filename, defaultLogTargets?: LogTarget[]): void => {
    if (!isUndefined(logDir)) ioSettings.logDir = logDir

    program
        .option(`-${ScriptFlag.LOG_TARGETS}, --log-targets [logTargets]`, "log targets")
        .option(`-${ScriptFlag.NO_COLOR}, --no-color`, "no color")
        .option(`-${ScriptFlag.TABLE_FORMAT}, --table-format <tableFormat>`, "table format")
        .option(`-${ScriptFlag.NO_TIME}, --no-time`, "no time")

    program.parse(process.argv)

    if (!isUndefined(logDir)) clearLogFiles(logDir)

    if (!isUndefined(program.tableFormat)) ioSettings.tableFormat = program.tableFormat

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(COMMA))

    ioSettings.disableColors = !program.color || !!process.env.TEST_MODE

    if (program.time && !process.env.TEST_MODE) {
        ioSettings.time = now()
    }
}

export {
    setupScriptAndIo,
}
