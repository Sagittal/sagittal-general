import { computeTrimmedArray, increment, isUndefined, Maybe, shallowClone } from "../../../code"
import { Count, Extrema } from "../../../types"
import { Decimal, Vector, NumericProperties } from "../../numeric"
import { Prime } from "../types"

const doForEachRationalVector = <T extends NumericProperties, U>(
    primeCountExtremas: Array<Extrema<{ of: Decimal<{ integer: true }> & Count<Prime> }>>,
    workFunction: (rationalVector: Vector<T & { rational: true }>, ...args: any) => Maybe<U>,
    ...args: any
): U[] => {
    const initialVector = primeCountExtremas.map(
        ([minPrimeCount, _]: Extrema<{
            of: Decimal<{ integer: true }> & Count<Prime>
        }>): Decimal<{ integer: true }> & Count<Prime> => minPrimeCount,
    ) as Vector<{ rational: true }>
    const finalVector = primeCountExtremas.map(
        ([_, maxPrimeCount]: Extrema<{
            of: Decimal<{ integer: true }> & Count<Prime>
        }>): Decimal<{ integer: true }> & Count<Prime> => maxPrimeCount,
    ) as Vector<{ rational: true }>

    let currentVector = shallowClone(initialVector) as Vector<{ rational: true }>

    const results = [] as U[]
    while (true) {
        // Do the work (trimming has the extra win of shallow cloning, disconnecting from this ticking process)
        const vectorForWork = computeTrimmedArray(currentVector)
        const result = workFunction(vectorForWork as Vector<T & { rational: true }>, ...args)
        if (!isUndefined(result)) {
            results.push(result)
        }

        // Figure out which index is the first one which hasn't reached its max
        let indexToTick = 0
        // We have reached the max for this c for now (and haven't exceeded the end of the vector)
        while (
            indexToTick < currentVector.length &&
            currentVector[indexToTick] === finalVector[indexToTick]
        ) {
            indexToTick = increment(indexToTick)
        }

        // Ok so now we're at the first prime count which isn't at its max

        // Quit now if apparently ALL the terms are at their maxes
        if (indexToTick === currentVector.length) {
            break
        }

        // Otherwise increment the prime count at this not-yet-maxed index toward its max
        currentVector[indexToTick] = increment(currentVector[indexToTick])

        // And reset the prime count at every other index before this one to its min,
        // So we can repeat everything we've done so far but for this index being one higher than it was previously
        let i = 0
        while (i < indexToTick) {
            currentVector[i] = initialVector[i]
            i = increment(i)
        }
    }

    return results
}

export { doForEachRationalVector }
