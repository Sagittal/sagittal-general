import {Filename, NEWLINE, readLines, setupScriptAndIo} from "../../../../src"

setupScriptAndIo("tmp" as Filename)

// This is a great place to paste stuff you need to run without Jasmine swallowing the stacktrace!
// Just paste whatever you need here and run `make tmp`.

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const tmp = JSON.parse(readLines("spec/helpers/shared/tmp/tmp.txt" as Filename).join(NEWLINE))
