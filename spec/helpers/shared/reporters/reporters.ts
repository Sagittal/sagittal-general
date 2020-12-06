import {slowReporter} from "./slowReporter"
import {specNameReporter} from "./specNameReporter"
import {specReporter} from "./specReporter"

Error.stackTraceLimit = Infinity

jasmine.getEnv()
    .clearReporters()

jasmine.getEnv()
    .addReporter(specReporter)
jasmine.getEnv()
    .addReporter(slowReporter)
jasmine.getEnv()
    .addReporter(specNameReporter)
