import * as fs from "fs"
import * as path from "path"
import {Filename, Io, isUndefined, Maybe, readLines} from "../../src"

const INDEX_OF_CAPTURED_GROUP = 1

const catchBadMainDescriptions = (basePath: Filename): void => {
    for (const file of fs.readdirSync(basePath)) {
        const filename = path.join(basePath, file) as Filename

        if (fs.lstatSync(filename).isDirectory()) {
            catchBadMainDescriptions(filename)
        } else if (!new RegExp("verificationSpecs").test(filename) && !new RegExp("scripts.*scripts").test(filename)) {
            const lines = readLines(filename)

            let subjectDescription: Maybe<string> = undefined

            lines.forEach((line: Io): void => {
                let maybeDescribeMatches = line.match(/^describe\("(\w+)/)
                if (maybeDescribeMatches !== null) subjectDescription = maybeDescribeMatches[INDEX_OF_CAPTURED_GROUP]

                let subjectActual = line.match(/\s*const actual = (?:await )?(\w+)/)
                if (
                    subjectActual !== null
                    && !isUndefined(subjectDescription)
                    && subjectDescription !== subjectActual[INDEX_OF_CAPTURED_GROUP]
                ) {
                    throw new Error(`Mismatched main description and subject in module ${filename}: description says ${subjectDescription} but actual is ${subjectActual[INDEX_OF_CAPTURED_GROUP]}`)
                }
            })
        }
    }
}

// Another reason to disable these except on CI is that if you use fdescribe in a spec with multiple
// Top-level describes, it will report a problem because it doesn't recognize fdescribe to reset what it's matching
// Already have this to-do in Asana somewhere though.
catchBadMainDescriptions("spec/src" as Filename)
