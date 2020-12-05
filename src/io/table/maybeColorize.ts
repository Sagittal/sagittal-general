import {isUndefined, Maybe} from "../../code"
import {colorize} from "../colorize"
import {ColorMethod, Io} from "../types"

const maybeColorize = (rowIo: Io, rowIndex: number, colors: Maybe<Array<Maybe<ColorMethod>>>): Io => {
    if (isUndefined(colors)) {
        return rowIo
    }

    const rowColor: Maybe<ColorMethod> = colors[rowIndex]

    return rowColor ? colorize(rowIo, rowColor) : rowIo
}

export {
    maybeColorize,
}
