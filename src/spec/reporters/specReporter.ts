import {SpecReporter} from "jasmine-spec-reporter"
import {CI_MODE} from "../ciMode"

const specReporter = process.env.TEST_MODE ? new SpecReporter({summary: {displayPending: CI_MODE}}) : {}

export {
    specReporter,
}
