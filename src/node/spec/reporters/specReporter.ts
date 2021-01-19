import {SpecReporter} from "jasmine-spec-reporter"
import {CI_MODE} from "../ciMode"

let specReporter = {} as jasmine.CustomReporter

const surfaceSpecNameToSpecs = (result: jasmine.CustomReporterResult): void => {
    (jasmine as unknown as {currentTest: jasmine.CustomReporterResult}).currentTest = result
}

if (process?.env?.TEST_MODE) {
    specReporter = new SpecReporter({summary: {displayPending: CI_MODE}})
    specReporter.specStarted = surfaceSpecNameToSpecs
    specReporter.specDone = surfaceSpecNameToSpecs
}

export {
    specReporter,
}
