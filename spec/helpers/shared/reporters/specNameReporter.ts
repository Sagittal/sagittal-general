import {CustomReporterResult} from "jasmine-spec-reporter/built/spec-reporter"
import {LogTarget, saveLog} from "../../../../src"

// This is quite handy when the suite starts to hang, so you can identify where the issue is.

const PRINT_NAMES = process.argv[3] === "--names=true"

const specNameReporter: jasmine.CustomReporter = {
    specStarted(result: CustomReporterResult): void {
        if (PRINT_NAMES) saveLog(result.fullName, LogTarget.SPEC)
    },
}

export {
    specNameReporter,
}
