import {isArray, isUndefined, Maybe} from "../code"
import {Exclusive} from "./types"

const computeLowerAndUpperExclusive = (
    exclusive: Maybe<Exclusive>,
): {lowerExclusive: Maybe<boolean>, upperExclusive: Maybe<boolean>} => {
    if (isArray(exclusive)) {
        const [lowerExclusive, upperExclusive] = exclusive

        return {lowerExclusive, upperExclusive}
    } else if (isUndefined(exclusive)) {
        return {lowerExclusive: undefined, upperExclusive: undefined}
    } else {
        return {lowerExclusive: exclusive, upperExclusive: exclusive}
    }
}

export {
    computeLowerAndUpperExclusive,
}
