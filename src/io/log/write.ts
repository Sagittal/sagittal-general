import * as fs from "fs"
import {NEWLINE} from "../constants"
import {ioSettings} from "../globals"
import {removeColor} from "../removeColor"
import {TableFormat} from "../table"
import {Filename, Io} from "../types"
import {BOM} from "./constants"
import {LogTarget} from "./types"

const write = (message: Io, target: LogTarget, scriptGroup: Filename, filenameOverride?: Filename): void => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync(`dist/${scriptGroup}`) || fs.mkdirSync(`dist/${scriptGroup}`)

    const file = `dist/${filenameOverride || `${scriptGroup}/${target}.txt`}`

    if (!fs.existsSync(file) && ioSettings.tableFormat === TableFormat.SPREADSHEET) {
        // See: http://forum.sagittal.org/viewtopic.php?p=2410#p2410
        // And https://stackoverflow.com/a/27975629/6998322
        fs.appendFileSync(file, BOM, {encoding: "utf8"})
        // This is to prevent Excel from dropping columns of desired data
        // Because it seems to base things on the first row of the file
        // Even if the table proper doesn't come for a few lines
        // Based on how I've designed the output of the scripts to be more than mere tables
        fs.appendFileSync(file, " \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t\n", {encoding: "utf8"})
    }

    fs.appendFileSync(file, `${removeColor(message)}` + NEWLINE, {encoding: "utf8"})
}

export {
    write,
}
