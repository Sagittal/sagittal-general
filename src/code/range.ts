import { Decimal, Integer } from "../math"
import { isUndefined, Range } from "./index"

const computeRange = <T extends Decimal<Integer>>(firstParameter: T, secondParameter?: T): Range<T> => {
    if (isUndefined(secondParameter)) {
        return [...Array(firstParameter).keys()] as Range<T>
    }

    return [...Array(secondParameter - firstParameter).keys()].map(
        (number: number): number => number + firstParameter,
    ) as Range<T>
}

export { computeRange }
