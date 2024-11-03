import { Io } from "../io"
import { ColorMethod, scriptSettings } from "./scripts"

const colorize = (io: Io, color: ColorMethod): Io => {
    if (scriptSettings.disableColors) return io

    return io[color] as Io
}

export { colorize }
