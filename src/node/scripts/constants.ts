import { Io } from "../../io"
import { Filename } from "../types"
import { LogTargets, ScriptSettings } from "./types"

// Becomes ï»¿ in UTF-8; Node takes care of it based on the "encoding" property
// See: http://forum.sagittal.org/viewtopic.php?p=2410#p2410
// And https://stackoverflow.com/a/27975629/6998322
const BOM = "\ufeff" as Io

// This is to prevent Excel from dropping columns of desired data
// Because it seems to base things on the first row of the file
// Even if the table proper doesn't come for a few lines
// Based on how I've designed the output of the scripts to be more than mere tables
const COLUMN_RECOGNITION_FORCER =
    " \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t\n"

const DEFAULT_SCRIPT_SETTINGS: ScriptSettings = {
    logTargets: {} as LogTargets,
    disableColors: false,
    time: undefined,
    logDir: "" as Filename,
}

export { BOM, COLUMN_RECOGNITION_FORCER, DEFAULT_SCRIPT_SETTINGS }
