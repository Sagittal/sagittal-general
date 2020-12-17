export {
    catchBadMainDescriptions,
    catchBadSpecFiles,
    catchEmptyFiles,
    onlyRunInCi,
    customMatchers,
    specReporter,
    specNameReporter,
    slowReporter,
    runScriptAndGetConsoleOutput,
    adjustAsyncTimeoutForSpec,
} from "./spec"
export {
    clearLogFiles,
    LogTarget,
    saveLog,
    setLogTargets,
    ScriptFlag,
    setupScriptAndIo,
    program,
    scriptSettings,
    time,
    ColorMethod,
    formatTable,
    DEFAULT_SCRIPT_SETTINGS,
} from "./scripts"
export {removeColor} from "./removeColor"
export {readLines} from "./lines"
export {Filename} from "./types"
export {colorize} from "./colorize"
