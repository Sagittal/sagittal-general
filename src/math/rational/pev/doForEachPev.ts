import {computeTrimmedArray, increment, isUndefined, Maybe, shallowClone} from "../../../code"
import {Extrema} from "../../../types"
import {Decimal, Pev, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {Prime} from "../types"

const doForEachRationalPev = <T extends NumericProperties, U>(
    primeExponentExtremas: Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>>,
    workFunction: (rationalPev: Pev<T & {rational: true}>, ...args: any) => Maybe<U>,
    ...args: any
): U[] => {
    const initialPev = primeExponentExtremas.map(
        (
            [minPrimeExponent, _]: Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>,
        ): Decimal<{integer: true}> & Exponent<Prime> => minPrimeExponent,
    ) as Pev<{rational: true}>
    const finalPev = primeExponentExtremas.map(
        (
            [_, maxPrimeExponent]: Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>,
        ): Decimal<{integer: true}> & Exponent<Prime> => maxPrimeExponent,
    ) as Pev<{rational: true}>

    let currentPev = shallowClone(initialPev) as Pev<{rational: true}>

    const results = [] as U[]
    while (true) {
        // Do the work (trimming has the extra win of shallow cloning, disconnecting from this ticking process)
        const pevForWork = computeTrimmedArray(currentPev)
        const result = workFunction(pevForWork as Pev<T & {rational: true}>, ...args)
        if (!isUndefined(result)) {
            results.push(result)
        }

        // Figure out which index is the first one which hasn't reached its max
        let indexToTick = 0
        // We have reached the max for this c for now (and haven't exceeded the end of the pev)
        while (indexToTick < currentPev.length && currentPev[indexToTick] === finalPev[indexToTick]) {
            indexToTick = increment(indexToTick)
        }

        // Ok so now we're at the first prime exponent which isn't at its max

        // Quit now if apparently ALL the terms are at their maxes
        if (indexToTick === currentPev.length) {
            break
        }

        // Otherwise increment the prime exponent at this not-yet-maxed index toward its max
        currentPev[indexToTick] = increment(currentPev[indexToTick])

        // And reset the prime exponent at every other index before this one to its min,
        // So we can repeat everything we've done so far but for this index being one higher than it was previously
        let i = 0
        while (i < indexToTick) {
            currentPev[i] = initialPev[i]
            i = increment(i)
        }
    }

    return results
}

export {
    doForEachRationalPev,
}
