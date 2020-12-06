import {DEFAULT_IO_SETTINGS, ioSettings, LogTarget, setAllPropertiesOfObjectOnAnother} from "../../../src"

beforeEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: ioSettings,
        objectWithProperties: {
            ...DEFAULT_IO_SETTINGS,
            logTargets: {[LogTarget.SPEC]: true},
        },
    })
})
