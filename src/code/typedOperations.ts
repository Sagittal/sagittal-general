import {performance} from "perf_hooks"
import {Ms} from "../types"

const now = (): Ms => {
    return performance.now() as Ms
}

export {
    now,
}
