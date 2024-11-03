import { SpecReporter } from "jasmine-spec-reporter"
import { FULL_MODE } from "../fullMode"

const specReporter = process?.env?.TEST_MODE
    ? new SpecReporter({ summary: { displayPending: FULL_MODE } })
    : {}

export { specReporter }
