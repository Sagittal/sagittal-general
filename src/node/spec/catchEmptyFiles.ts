import * as fs from "fs"
import * as path from "path"
import { Filename } from "../types"
import { FULL_MODE } from "./fullMode"

const catchEmptyFiles = (basePath: Filename): void => {
    if (!FULL_MODE) return

    for (const file of fs.readdirSync(basePath)) {
        const filename = path.join(basePath, file) as Filename

        if (fs.lstatSync(filename).isDirectory()) {
            catchEmptyFiles(filename)
        } else {
            if (fs.readFileSync(filename).length === 0 && file !== ".keep") {
                throw new Error(`Empty file detected: ${filename}`)
            }
        }
    }
}

export { catchEmptyFiles }
