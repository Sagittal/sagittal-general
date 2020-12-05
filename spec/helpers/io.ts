import {ioSettings, LogTarget} from "../../src"
import {setAllPropertiesOfObjectOnAnother} from "../../src/code/setAllPropertiesOfObjectOnAnother"
import {DEFAULT_IO_SETTINGS} from "../../src/io/constants"

beforeEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: ioSettings,
        objectWithProperties: {
            ...DEFAULT_IO_SETTINGS,
            logTargets: {[LogTarget.SPEC]: true},
        },
    })
})
