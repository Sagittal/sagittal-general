import * as fs from "fs"
import * as path from "path"
import {Filename} from "../types"

const clearLogFiles = (logDir: Filename): void => {
    if (!fs.existsSync("log")) return

    const directory = `log/${logDir}`

    if (!fs.existsSync(directory)) return

    const files = fs.readdirSync(directory)

    for (const file of files) {
        fs.unlinkSync(path.join(directory, file))
    }
}

export {
    clearLogFiles,
}
