import {FULL_MODE} from "./fullMode"

const slowTestOnlyRunInFullSuite = (): void => {
    if (!FULL_MODE) {
        pending("slow test only run in full suite")
    }
}

export {
    slowTestOnlyRunInFullSuite,
}
