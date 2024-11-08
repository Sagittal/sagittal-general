import "colors"
import { program } from "commander"
import { isUndefined } from "../../code"
import { KeyValObj } from "../../code"
import { COMMA, ioSettings, TableFormat } from "../../io"
import { Filename } from "../types"
import { clearLogFiles } from "./clear"
import { scriptSettings } from "./globals"
import { setLogTargets } from "./set"
import { now } from "./time"
import { LogTarget } from "./types"

const setupScriptAndIo = (logDir?: Filename, defaultLogTargets?: LogTarget[]): void => {
    if (!isUndefined(logDir)) scriptSettings.logDir = logDir

    program
        .option("--log-targets [logTargets]", "log targets")
        .option("--no-color", "no color")
        .option("--table-format <tableFormat>", "table format")
        .option("--no-time", "no time")

    program.parse(process?.argv)
    const { logTargets, color, tableFormat, time }: KeyValObj<string> = program.opts()

    if (!isUndefined(logDir)) clearLogFiles(logDir)

    if (!isUndefined(tableFormat)) ioSettings.tableFormat = tableFormat as TableFormat

    setLogTargets(logTargets || (defaultLogTargets && defaultLogTargets.join(COMMA)))

    const testMode = process?.env?.TEST_MODE
    scriptSettings.disableColors = !color || !!testMode

    if (time && !testMode) {
        scriptSettings.time = now()
    }
}

export { setupScriptAndIo }
