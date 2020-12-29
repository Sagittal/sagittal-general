import * as cp from "child_process"
import {Io, NEWLINE, split} from "../../../io"
import {count} from "../../../math"
import {scriptSettings} from "../../scripts"
import {NPM_SCRIPT_HEADER_LINES_COUNT, SKIP_THE_FINAL_EMPTY_LINE} from "./constants"

const runScriptAndGetConsoleOutput = (script: Io, {throwError}: {throwError?: boolean} = {}): Io[] => {
    scriptSettings.disableColors = true
    const options: cp.ExecSyncOptionsWithBufferEncoding = throwError ?
        {stdio: [undefined, undefined, undefined]} :
        {stdio: ["pipe", "pipe", "inherit"]}
    const consoleOutput: Io = cp.execSync(script, options).toString() as Io
    const consoleOutputLines: Io[] = split(consoleOutput, NEWLINE)

    return consoleOutputLines.slice(
        NPM_SCRIPT_HEADER_LINES_COUNT,
        count(consoleOutputLines) - SKIP_THE_FINAL_EMPTY_LINE,
    )
}

export {
    runScriptAndGetConsoleOutput,
}
