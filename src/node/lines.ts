import * as fs from "fs"
import {BLANK, Io, NEWLINE} from "../io"
import {Filename} from "./types"

const readLines = (filename: Filename): Io[] => {
    const lines = fs
        .readFileSync(filename, {encoding: "utf8"})
        .replace(/\r/g, BLANK)
        .split(NEWLINE)

    lines.pop()

    return lines
}

export {
    readLines,
}
