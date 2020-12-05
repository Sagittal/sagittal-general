import {Filename} from "../types"

enum LogTarget {
    ALL = "all",
    ERROR = "error",
    SPEC = "spec",
    NONE = "none",
    FINAL = "final",
    PROGRESS = "progress",
    DETAILS = "details",
    SETUP = "setup",
    RESULT = "result",
}

type SaveLogOptions = Partial<{
    useTargetColor: boolean,
    filenameOverride: Filename,
    writeOnly: boolean,
}>

type LogTargets = Record<LogTarget, boolean>

export {
    LogTargets,
    LogTarget,
    SaveLogOptions,
}
