import {ioSettings} from "./globals"
import {ColorMethod, Io} from "./types"

const colorize = (io: Io, color: ColorMethod): Io => {
    if (ioSettings.disableColors) return io

    // @ts-ignore
    return io[color] as Io
}

export {
    colorize,
}
