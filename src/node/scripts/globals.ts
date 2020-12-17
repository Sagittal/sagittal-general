import {DEFAULT_SCRIPT_SETTINGS} from "./constants"
import {ScriptSettings} from "./types"

const scriptSettings: ScriptSettings = JSON.parse(JSON.stringify(DEFAULT_SCRIPT_SETTINGS))

export {
    scriptSettings,
}
