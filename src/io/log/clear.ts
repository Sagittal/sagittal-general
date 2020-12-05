import * as fs from "fs"
import * as path from "path"
import {Filename} from "../types"

const clearLogFiles = (scriptGroup: Filename): void => {
    if (!fs.existsSync("dist")) return

    const directory = `dist/${scriptGroup}`

    if (!fs.existsSync(directory)) return

    const files = fs.readdirSync(directory)

    for (const file of files) {
        fs.unlinkSync(path.join(directory, file))
    }
}

export {
    clearLogFiles,
}
