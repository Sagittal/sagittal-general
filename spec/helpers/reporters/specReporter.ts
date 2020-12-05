import {SpecReporter} from "jasmine-spec-reporter"
import {CI_MODE} from "../ciMode"

const specReporter = new SpecReporter({summary: {displayPending: CI_MODE}})

export {
    specReporter,
}
