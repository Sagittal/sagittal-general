import * as fs from "fs"
import * as path from "path"
import {isUndefined, Maybe} from "../../code"
import {Io} from "../../io"
import {readLines} from "../lines"
import {Filename} from "../types"
import {FULL_MODE} from "./fullMode"

const INDEX_OF_CAPTURED_GROUP = 1

const catchBadMainDescriptions = (basePath: Filename): void => {
    if (!FULL_MODE) return

    for (const file of fs.readdirSync(basePath)) {
        const filename = path.join(basePath, file) as Filename

        if (fs.lstatSync(filename).isDirectory()) {
            catchBadMainDescriptions(filename)
        } else if (!new RegExp("verificationSpecs").test(filename) && !new RegExp("scripts").test(filename)) {
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

export {
    catchBadMainDescriptions,
}
