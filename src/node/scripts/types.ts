import {Maybe} from "../../code"
import {Ms} from "../../types"
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

type LogTargets = Record<LogTarget, boolean>

// TODO: Can't I maybe break this thing up so each script group gets its own flags?
//  Well you'd have to make sure you didn't override the four flags that are like for basic logging stuff...
//  Also wait a second... this is enforcing that you have no conflicts for the single character flags,
//  But it's not really protecting from overlapping word phrases...
// Keep this alphabetical so you can ensure no conflicts.
enum ScriptFlag {
    MAX_2_3_FREE_SOPFR = "+",
    MAX_2_3_FREE_COPFR = "#",
    SOS_MODE = "0",
    EXCLUDED_FIELDS = "1",
    SYNC = "2",
    MAX_ATE = "3",
    SECONDARY_COMMA_ZONES = "4",
    COMPLEXITY_SEARCH_ED = "5",
    COMPLEXITY_ONLY = "6",
    ACCIDENTAL = "7",
    ORDERED_FIELDS = "8",
    EXCLUSIVE = "9",
    MAX_AAS = "a",
    TABLE_FORMAT = "b",
    NO_COLOR = "c",
    UNDIRECTED_COMMA_NAME = "d",
    NO_MOOT = "e",
    FACTORING_MODE = "f",
    COMMA_NAME = "g",
    // "h" reserved for help
    INTEGER = "i",
    MAX_UNIT = "j",
    USE_KNOWN_POPULAR_2_3_FREE_CLASSES = "k",
    LOWER_BOUND = "l",
    MONZO = "m",
    MAX_N2D3P9 = "n",
    ONLY_TOP = "o",
    PRIME_LIMIT = "p",
    QUOTIENT = "q",
    USE_BEST_NOTATING_COMMAS = "r",
    SORT_BY = "s",
    LOG_TARGETS = "t",
    UPPER_BOUND = "u",
    UNABBREVIATED_COMMA_NAME = "v",
    FORCE_DEPLOY = "w",
    NO_TIME = "x",
    USE_LATE = "y",
    Z = "z",
}

interface ScriptSettings {
    logTargets: LogTargets,
    logDir: Filename,
    time: Maybe<Ms>,
    disableColors: boolean,
}

type ColorMethod =
    "white" |
    "gray" |
    "black" |
    "red" |
    "yellow" |
    "green" |
    "cyan" |
    "blue" |
    "magenta"

export {
    LogTargets,
    LogTarget,
    ScriptFlag,
    ScriptSettings,
    ColorMethod,
}
