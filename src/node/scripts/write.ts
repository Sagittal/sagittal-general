import * as fs from "fs"
import { Io, ioSettings, NEWLINE, TableFormat } from "../../io"
import { removeColor } from "../removeColor"
import { Filename } from "../types"
import { BOM, COLUMN_RECOGNITION_FORCER } from "./constants"
import { LogTarget } from "./types"

const write = (message: Io, target: LogTarget, logDir: Filename): void => {
    if (!fs.existsSync("log")) fs.mkdirSync("log")
    if (!fs.existsSync(`log/${logDir}`)) fs.mkdirSync(`log/${logDir}`)

    const file = `log/${logDir}/${target}.txt`

    if (!fs.existsSync(file) && ioSettings.tableFormat === TableFormat.SPREADSHEET) {
        fs.appendFileSync(file, BOM, { encoding: "utf8" })
        fs.appendFileSync(file, COLUMN_RECOGNITION_FORCER, { encoding: "utf8" })
    }

    fs.appendFileSync(file, `${removeColor(message)}` + NEWLINE, { encoding: "utf8" })
}

export { write }
