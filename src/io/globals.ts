import {DEFAULT_IO_SETTINGS} from "./constants"
import {IoSettings} from "./types"

const ioSettings: IoSettings = JSON.parse(JSON.stringify(DEFAULT_IO_SETTINGS))

export {
    ioSettings,
}
