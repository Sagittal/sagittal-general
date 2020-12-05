import {count} from "../math"
import {Count} from "../types"
import {isObject} from "./typeGuards"

const computeCardinality = (array: unknown[]): Count[] => {
    const cardinality = []

    let cursor = array
    while (isObject(cursor)) {
        cardinality.push(count(cursor))
        cursor = cursor[0] as unknown[]
    }

    return cardinality
}

export {
    computeCardinality,
}
