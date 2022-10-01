import "colors"
import {program} from "commander"
import {isUndefined} from "../../code"
import {COMMA, ioSettings} from "../../io"
import {Filename} from "../types"
import {clearLogFiles} from "./clear"
import {scriptSettings} from "./globals"
import {setLogTargets} from "./set"
import {now} from "./time"
import {LogTarget} from "./types"

const setupScriptAndIo = (logDir?: Filename, defaultLogTargets?: LogTarget[]): void => {
    if (!isUndefined(logDir)) scriptSettings.logDir = logDir

    program
        .option("--log-targets [logTargets]", "log targets")
        .option("--no-color", "no color")
        .option("--table-format <tableFormat>", "table format")
        .option("--no-time", "no time")

    program.parse(process?.argv)

    if (!isUndefined(logDir)) clearLogFiles(logDir)

    // @ts-ignore
    if (!isUndefined(program.tableFormat)) ioSettings.tableFormat = program.tableFormat

    // @ts-ignore
    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(COMMA))

    const testMode = process?.env?.TEST_MODE
    // @ts-ignore
    scriptSettings.disableColors = !program.color || !!testMode

    // @ts-ignore
    if (program.time && !testMode) {
        scriptSettings.time = now()
    }
}

export {
    setupScriptAndIo,
}
