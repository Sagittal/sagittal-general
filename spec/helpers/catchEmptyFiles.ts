import * as fs from "fs"
import * as path from "path"
import {Filename} from "../../src"

const catchEmptyFiles = (basePath: Filename): void => {
    for (const file of fs.readdirSync(basePath)) {
        const filename = path.join(basePath, file) as Filename

        if (fs.lstatSync(filename).isDirectory()) {
            catchEmptyFiles(filename as Filename)
        } else {
            if (fs.readFileSync(filename).length === 0 && file !== ".keep") {
                throw new Error(`Empty file detected: ${filename}`)
            }
        }
    }
}

catchEmptyFiles("src" as Filename)
catchEmptyFiles("spec/src" as Filename)
