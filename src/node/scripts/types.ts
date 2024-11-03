import { Maybe } from "../../code"
import { Ms } from "../../types"
import { Filename } from "../types"

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

interface ScriptSettings {
    logTargets: LogTargets
    logDir: Filename
    time: Maybe<Ms>
    disableColors: boolean
}

type ColorMethod = "white" | "gray" | "black" | "red" | "yellow" | "green" | "cyan" | "blue" | "magenta"

export { LogTargets, LogTarget, ScriptSettings, ColorMethod }
