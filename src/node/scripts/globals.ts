import { DEFAULT_SCRIPT_SETTINGS } from "./constants"
import { ScriptSettings } from "./types"

const scriptSettings: ScriptSettings = structuredClone(DEFAULT_SCRIPT_SETTINGS)

export { scriptSettings }
