import { LogTarget, saveLog } from "../../scripts"

// This is quite handy when the suite starts to hang, so you can identify where the issue is.

const PRINT_NAMES = process?.argv?.[3] === "--names=true"

const surfaceSpecNameToSpecs = (result: jasmine.CustomReporterResult): void => {
    ;(jasmine as unknown as { currentTest: jasmine.CustomReporterResult }).currentTest = result
}

const specNameReporter: jasmine.CustomReporter = {
    specStarted(result: jasmine.CustomReporterResult): void {
        if (PRINT_NAMES) saveLog(result.fullName, LogTarget.SPEC)
        surfaceSpecNameToSpecs(result)
    },
    specDone: surfaceSpecNameToSpecs,
}

export { specNameReporter }
