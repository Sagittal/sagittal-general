import {ColorMethod} from "../types"
import {LogTarget} from "./types"

const targetColors: Record<LogTarget, ColorMethod> = {
    [LogTarget.ALL]: "white",
    [LogTarget.ERROR]: "red",
    [LogTarget.SPEC]: "magenta",
    [LogTarget.NONE]: "white",
    [LogTarget.FINAL]: "green",
    [LogTarget.PROGRESS]: "yellow",
    [LogTarget.DETAILS]: "white",
    [LogTarget.SETUP]: "cyan",
    [LogTarget.RESULT]: "green",
}

export {
    targetColors,
}
