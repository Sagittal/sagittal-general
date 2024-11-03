import { DEFAULT_IO_SETTINGS } from "./constants"
import { IoSettings } from "./types"

const ioSettings: IoSettings = structuredClone(DEFAULT_IO_SETTINGS)

export { ioSettings }
