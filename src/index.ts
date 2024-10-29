export * from "./esmIndex"
export {
    catchBadMainDescriptions,
    catchBadSpecFiles,
    catchEmptyFiles,
    slowTestOnlyRunInFullSuite,
    specReporter,
    specNameReporter,
    slowReporter,
    customMatchers,
    runScriptAndGetConsoleOutput,
    adjustAsyncTimeoutForSpec,
    LogTarget,
    clearLogFiles,
    setupScriptAndIo,
    removeColor,
    saveLog,
    setLogTargets,
    program,
    time,
    readLines,
    ColorMethod,
    Filename,
    colorize,
    formatTableFromScript,
    scriptSettings,
    DEFAULT_SCRIPT_SETTINGS,
    now,
} from "./node"

// TODO: NAMESPACED TYPES ?
// Document, Window, Generator, Link, Map, Error, Range, Sign
// these would be better to do like Rtt.Map, so import * as and then deconstruct on separate line before functions?
// but then as long as I'm doing it that way... should I do it that way more consistently?
// just for all types ?

// TODO: CROSS-REPO RE-ORG
// a @cmloegcmluin/typed-utilities library, that would include math stuff
// and be used by MusicalPatterns, Sagittal, RTT (the web app), etc.
// and RTT would be used by Sagittal too
