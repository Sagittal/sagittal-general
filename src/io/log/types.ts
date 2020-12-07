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

type LogTargets = Record<LogTarget, boolean>

export {
    LogTargets,
    LogTarget,
}
