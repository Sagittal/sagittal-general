import * as fs from "fs"
import { deepEquals } from "../../../../src"

const tmp = fs.readFileSync("spec/helpers/shared/tmp/tmp.ts")
const tmpSnapshot = fs.readFileSync("spec/helpers/shared/tmp/tmpSnapshot.txt")

if (!deepEquals(tmp, tmpSnapshot)) {
    throw new Error("You have made changes to tmp.ts and should remove them before proceeding.")
}
