import {computeTrimmedArray, increment, isUndefined, Maybe, shallowClone} from "../../../code"
import {LogTarget, saveLog, stringify} from "../../../io"
import {Extrema} from "../../../types"
import {Decimal, Monzo, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {Prime} from "../types"

const doForEachRationalMonzo = <T extends NumericProperties, U>(
    primeExponentExtremas: Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>>,
    workFunction: (rationalMonzo: Monzo<T & {rational: true}>, ...args: any) => Maybe<U>,
    ...args: any
): U[] => {
    saveLog(`prime exponent extremas: ${stringify(primeExponentExtremas)}`, LogTarget.PROGRESS)

    const monzoCount = primeExponentExtremas.reduce(
        (total: number, [min, max]: [number, number]): number => total * (max - min + 1),
        1,
    )
    saveLog(`total monzos to check: ${monzoCount}`, LogTarget.PROGRESS)
    let monzosCheckedCount = 0

    const initialMonzo = primeExponentExtremas.map(
        (
            [minPrimeExponent, _]: Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>,
        ): Decimal<{integer: true}> & Exponent<Prime> => minPrimeExponent,
    ) as Monzo<{rational: true}>
    const finalMonzo = primeExponentExtremas.map(
        (
            [_, maxPrimeExponent]: Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>,
        ): Decimal<{integer: true}> & Exponent<Prime> => maxPrimeExponent,
    ) as Monzo<{rational: true}>

    let currentMonzo = shallowClone(initialMonzo) as Monzo<{rational: true}>

    const results = [] as U[]
    while (true) {
        // Do the work (trimming has the extra win of shallow cloning, disconnecting from this ticking process)
        const monzoForWork = computeTrimmedArray(currentMonzo)
        const result = workFunction(monzoForWork as Monzo<T & {rational: true}>, ...args)
        if (!isUndefined(result)) {
            results.push(result)
        }

        // Log progress
        monzosCheckedCount = increment(monzosCheckedCount)
        if (monzosCheckedCount % 1000000 === 0) {
            saveLog(`done: ${monzosCheckedCount} (${100 * monzosCheckedCount / monzoCount}%)`, LogTarget.PROGRESS)
        }

        // Figure out which index is the first one which hasn't reached its max
        let indexToTick = 0
        // We have reached the max for this c for now (and haven't exceeded the end of the monzo)
        while (indexToTick < currentMonzo.length && currentMonzo[indexToTick] === finalMonzo[indexToTick]) {
            indexToTick = increment(indexToTick)
        }

        // Ok so now we're at the first prime exponent which isn't at its max

        // Quit now if apparently ALL the terms are at their maxes
        if (indexToTick === currentMonzo.length) {
            break
        }

        // Otherwise increment the prime exponent at this not-yet-maxed index toward its max
        currentMonzo[indexToTick] = increment(currentMonzo[indexToTick])

        // And reset the prime exponent at every other index before this one to its min,
        // So we can repeat everything we've done so far but for this index being one higher than it was previously
        let i = 0
        while (i < indexToTick) {
            currentMonzo[i] = initialMonzo[i]
            i = increment(i)
        }
    }

    return results
}

export {
    doForEachRationalMonzo,
}
